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
  category: string = 'Mèo';
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



    if(type === 'c_fo'){
      this.category = "Thức ăn"
    }
    if(type === 'c_cl'){
      this.category = "Quần áo"
    }
    if (type === 'c_co'){
      this.category="Vòng cổ, dây dắt, rọ mõm"
    }
    if (type === 'c_ds'){
      this.category="Dụng cụ ăn uống"
    }
    if (type === 'c_be'){
      this.category="Mỹ phẩm, dụng cụ làm đẹp"
    }
    if (type === 'c_ca'){
      this.category="Chuồng, giường, nhà, túi"
    }
    if (type === 'c_toy'){
      this.category="Đồ chơi, phụ kiện huấn luyện"
    }
    if (type === 'c_sa'){
      this.category="Cát vệ sinh"
    }


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
