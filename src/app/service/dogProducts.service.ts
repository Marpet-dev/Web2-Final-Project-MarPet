import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Product } from '../interface/Product';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class DogProductsService {
  // public productList : any ;
  // searchKey:string ="";
  url = 'http://localhost:3000/products/dogs';
  constructor(private _http: HttpClient, private cartService : CartService) { }
  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.url)
      .pipe(
        retry(2), catchError(this.handleError)
      )
  }
  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message)
    )
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

}
