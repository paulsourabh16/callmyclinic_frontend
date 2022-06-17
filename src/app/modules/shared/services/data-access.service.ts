import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  constructor(
    private http: HttpClient
  ) { }

  public exchange(url: any, params: URLSearchParams, httpHeaders: HttpHeaders): Observable<any> {
    return this.http.post(url, params.toString(), { headers: httpHeaders });
  }
}
