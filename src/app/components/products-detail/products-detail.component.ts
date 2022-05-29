import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  product: any;
  errMsg: string = '';
  getId: string = '';
  constructor(private _service: ProductsService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
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
}
