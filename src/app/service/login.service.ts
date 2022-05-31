import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, retry, throwError } from 'rxjs';
import { IUser } from '../interface/users';
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
  getLoginUser() {
    return this._http.get(`${baseUrl}/users/users`).pipe(
      retry(2),
      catchError(this.handleError)
    )
}
getUserInfo(id: any){
  return this._http.get(`${baseUrl}/users/${id}`).pipe(
    retry(2),
    catchError(this.handleError)
  )
}

  handleError(error: HttpErrorResponse){
    return throwError(()=>{new Error(error.message)})
  }
}
