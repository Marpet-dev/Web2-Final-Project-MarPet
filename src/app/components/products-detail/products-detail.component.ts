import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  product: any;
  errMsg: string = '';
  getId: string = '';
  public productList : any;
  constructor(private _service: ProductsService, private _activatedRoute: ActivatedRoute, private cartService : CartService,private api : ApiService) { }

  ngOnInit(): void {
    this.api.getProducts()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
      // console.log(this.productList)
    });
    this._activatedRoute.paramMap.subscribe(
      (param) => {
        let id = param.get('id');
        if (id != null) {
          this.getId = id;
        }
      }
    )
    this.getProduct(this.getId)
  }
  getProduct(id: any) {
    this._service.getProductsById(id).subscribe(
      {
        next: (data) => this.product = data,
        error: (err) => this.errMsg = err.message
      })

  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
    
  }
}
