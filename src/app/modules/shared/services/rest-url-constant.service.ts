import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestUrlConstantService {

  constructor() { }

  public API_SERVER_CONTEXT = 'http://localhost:8000';


  //Authentication

  public AUTH_LOGIN = 'api/user/login';
}
