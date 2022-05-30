import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { CatProductsService } from '../../service/catProducts.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  products: any;
  errMsg: string = '';
  getType: any;
  p: boolean = false;
  title: any;
  constructor(private _service: ProductsService, private _router: Router, private _activatedRoute: ActivatedRoute, 
     ) { }

  ngOnInit(): void {
    // this._service.getProducts().subscribe(
    //   {
    //     next: (data) => this.products = data,
    //     error: (err) => this.errMsg = err.message
    //   })
    this.getProducts();

    // this._activatedRoute.paramMap.subscribe(
    //   (param) => {
    //     let type = param.get('type');
    //     if (type != null) {
    //       this.getType = type;
    //     }
    //   }
    // )
    if (this.products.category == 'c_fo'){
      this.title == 'thức ăn';
    }
   
  }
  
  



  getProducts() {
    this._service.getProducts().subscribe(
      {
        next: (data) => this.products = data,
        error: (err) => this.errMsg = err.message
      })



  }
  
  checkCat(products: any[]): any[] {
    return products.filter(p => p.category.substring(0,1) === 'c');
  }
  
  navigateType(type: string):void {
    this._router.navigateByUrl(`/cat?type=${type}`);
    this.loadProducts()
  }

  // headline(type: string):void {
  //   this._router.navigateByUrl(`/cat?type=${type}`);
  //   if (type == 'c_fo'){
  //     this.title == 'thức ăn'
  //   }
  // }

  loadProducts(){
    this._activatedRoute.queryParams.subscribe((params: Params) => {
      const typeStr = Object.values(params)[0]
      this._service.getProductsType(typeStr).subscribe(
        {
          next: (data) => this.products = data,
          error: (err) => this.errMsg = err.message
        })
     
    });

  }

}
