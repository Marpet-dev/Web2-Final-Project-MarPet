import { SendavatarService } from 'src/app/service/sendavatar.service';
import { Component, OnInit, Input } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  // public imgSrc:any;
  // constructor() { }
  message:any;
  products : any = [];
  allProducts:any=0;
  public grandTotal !: number;
  public sone : number = 0;
  constructor(private stageColorService: SendavatarService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProductData()
    .subscribe(res=>{
      this.products=res;
      this.allProducts=this.cartService.getTotalAmount();
    })
    this.message=this.stageColorService.getMessage();
    
  }
  
removeProduct(item: any){
  this.cartService.removeCartData(item);
}
removeAllProduct(){
  this.cartService.removeAllCart();
}
}
