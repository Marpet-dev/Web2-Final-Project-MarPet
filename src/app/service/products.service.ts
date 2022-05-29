import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http'
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Product } from '../interface/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'http://localhost:3000';
  constructor(private _http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${this.baseUrl}/products`)
      .pipe(
        retry(2), catchError(this.handleError)
      )
  }
  getProductsDogs(): Observable<Product[]> {
    return this._http.get<Product[]>(`${this.baseUrl}/products/dogs`)
      .pipe(
        retry(2), catchError(this.handleError)
      )
  }
  getProductsType(a:string): Observable<Product[]> {
    return this._http.get<Product[]>(`${this.baseUrl}/products/category/?type=${a}`)
      .pipe(
        retry(2), catchError(this.handleError)
      )
  }

  getProductsById(id:string): Observable<Product[]> {
    return this._http.get<Product[]>(`${this.baseUrl}/products/${id}`)
      .pipe(
        retry(2), catchError(this.handleError)
      )
  }

  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message)
    )
  }
}


