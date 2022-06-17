import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from "rxjs";
import { DataAccessService } from './data-access.service';
import { LocalStoreService } from './local-store.service';
import { RestUrlConstantService } from './rest-url-constant.service';

@Injectable({
  providedIn: 'root'
})
export class TokenClientService {

  token: any = {};

  constructor(
    private http: HttpClient,
    private dataAccess: DataAccessService,
    public restUrl: RestUrlConstantService,
    private localStoreService: LocalStoreService,
  ) { }

  // private _loginUrl = 
  // this.restUrl.API_SERVER_CONTEXT + this.restUrl.AUTH_LOGIN;

  public _loginUrl = "http://localhost:8000/api/user/login";

  public getHttpHeaders(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }
  public getHeadersWithClientCredentials(): HttpHeaders {
    const plainClientCredentials = "chatrachatri-api:coderlook";
    const base64ClientCredentials = new String(btoa(plainClientCredentials));
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      "Authorization": "Basic " + base64ClientCredentials
    });
    return headers;
  }

  public getAccessToken() {
    let token = JSON.parse(this.localStoreService.getItem("token"));
    return token.accessToken;
  }

  public sendTokenRequest(userModel: any): Observable<any> {
    return this.http.post(this._loginUrl, userModel);
  }

  public getRefreshToken(): Observable<any> {
    this.token = JSON.parse(this.localStoreService.getItem("token"));
    let params = new URLSearchParams();
    params.append('refresh_token', this.token.refreshToken);
    return this.dataAccess.exchange(this._loginUrl, params, this.getHeadersWithClientCredentials());
  }

  refreshToken() {
    this.token = JSON.parse(this.localStoreService.getItem("token"));
    let params = new URLSearchParams();
    params.append('refresh_token', this.token.refreshToken);
    return this.dataAccess.exchange(this._loginUrl, params, this.getHeadersWithClientCredentials()).pipe(tap((tokens: any) => {
      this.storeToken(tokens);
    }));
  }

  storeToken(tokens: any) {
    this.localStoreService.setItem("token", JSON.stringify(tokens));
  }

}
