import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
//import { AuthService } from './modules/auth/services/auth.service';
import { TokenClientService } from './modules/shared/services/token-client.service';

@Injectable({ providedIn: 'root' })

export class TokenInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
      private router: Router,
   // public authService: AuthService,
    private tokenService: TokenClientService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if ((request.url.search("http://localhost:8000/api/user/login") > -1) || 
    (request.url.search("api/forgetPassword") > -1) ||
    (request.url.search("api/changePassword") > -1) || 
    (request.url.search("/api/auth/ValidPasswordToken") > -1))  {
      return next.handle(request);
    }
    if (this.tokenService.getAccessToken()) {
      request = this.addToken(request, this.tokenService.getAccessToken());
    }
    return next.handle(request).pipe(catchError(error => {
     // console.log(JSON.stringify(error));
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handle401Error(request, next);
      } else {
        return throwError(error);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Authorization": 'Bearer ' + token
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    console.log("this.isRefreshing" + this.isRefreshing + JSON.stringify(request.headers));
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      return this.tokenService.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.access_token);
          return next.handle(this.addToken(request, token.access_token));
        }),
        catchError(this.handleError<any>()))
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(access_token => {
          return next.handle(this.addToken(request, access_token));
        }));
    }
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
     // this.authService.signout(this.router.url);
      console.error("Invalid token");
      return of(result as T);
    };
  }
}