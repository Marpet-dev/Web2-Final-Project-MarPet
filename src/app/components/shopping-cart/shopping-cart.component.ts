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
  public products : any = [];
  public grandTotal !: number;
  constructor(private stageColorService: SendavatarService, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })

    // this.stageColorService.stage$
    // .subscribe(
    //   image => {
    //     // console.log('image subscription'+ image);
    //       this.imgSrc = document.getElementById("avatarString")
    //     });
    this.message=this.stageColorService.getMessage()
}
removeItem(item: any){
  this.cartService.removeCartItem(item);
}
emptycart(){
  this.cartService.removeAllCart();
}
}
