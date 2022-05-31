import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(private cartService: CartService) { }
  products : any = [];
  ngOnInit(): void {
    this.cartService.getProductFav()
    .subscribe(res=>{
      this.products=res;
    })
  }

}
