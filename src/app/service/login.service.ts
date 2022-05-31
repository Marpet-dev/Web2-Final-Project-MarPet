import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { User } from '../models/user';

const baseUrl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  postUser(data: User){
    return this._http.post(`${baseUrl}/auth/login`,data).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse){
    return throwError(()=>{new Error(error.message)})
  }
}
