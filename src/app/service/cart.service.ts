import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '@syncfusion/ej2-angular-navigations';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  favDataList : any = [];
  productFav = new BehaviorSubject<any>([]);
  cartDataList : any =[];
  productList = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }
  getProductData(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cartDataList.push(...product);
    this.productList.next(product);
  }
  getProductFav(){
    return this.productFav.asObservable();
  }
  addToFav(product: any){
    this.favDataList.push(product);
    this.productFav.next(this.favDataList);
  }
  addToCart(product : any){
    this.getQuantity(product);
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    this.getTotalAmount();
    console.log(this.cartDataList);
    console.log(product.quantity);
  }
  getTotalAmount() {
    let grandTotal = 0;
    this.cartDataList.map((a:any)=>{
      grandTotal += a.toatl;
    })
  }
  getQuantity(product:any){
    let productQuantity = 1;
    productQuantity= product.quantity;

  }
  removeCartData(product: any){
    this.cartDataList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartDataList.splice(index,1);
      }
    })
    this.productList.next(this.cartDataList);
  }
  removeAllCart(){
    this.cartDataList = []
    this.productList.next(this.cartDataList);
  }
}
