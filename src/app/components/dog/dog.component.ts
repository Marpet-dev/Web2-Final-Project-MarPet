import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';
// import { DogProductsService } from '../../service/dogProducts.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  products: any;
  errMsg: string = '';
  productCategory: any;
  getType: any;
  p: boolean = false;
  category: string = 'Chó';
  quantity = 0;
  
  constructor(private _service:ProductsService, private _router: Router, private _activatedRoute: ActivatedRoute, private cartService : CartService
    ) { }

  ngOnInit(): void {
    // this._service.getProducts().subscribe(
    //   {
    //     next: (data) => this.products = data,
    //     error: (err) => this.errMsg = err.message
    //   })
    this.getProductsDogs();

    // this._activatedRoute.paramMap.subscribe(
    //   (param) => {
    //     let type = param.get('type');
    //     if (type != null) {
    //       this.getType = type;
    //     }
    //   }
    // )
    // plus()
    // {
    //  this.quantity = this.quantity+1;
    // }
    // minus()
    // {
    //   if(this.quantity != 0)
    // {
    //  this.quantity = this.quantity-1;
    // }
    
   
  }
  

 

  getProductsDogs() {
    this._service.getProductsDogs().subscribe(
      {
        next: (data) => this.products = data,
        error: (err) => this.errMsg = err.message
      })

  }

  

  checkDog(products: any[]): any[] {
    return products.filter(p => p.category.substring(0,1) === 'd');
  }
  
  navigateType(type: string):void {
 
    this._router.navigateByUrl(`/dog?type=${type}`);
    if(type === 'd_fo'){
      this.category = "Thức ăn"
    }
    if(type === 'd_cl'){
      this.category = "Quần áo"
    }
    if (type === 'd_co'){
      this.category="Vòng cổ, dây dắt, rọ mõm"
    }
    if (type === 'd_co'){
      this.category="Dụng cụ ăn uống"
    }
    if (type === 'd_be'){
      this.category="Mỹ phẩm, dụng cụ làm đẹp"
    }
    if (type === 'd_ca'){
      this.category="Chuồng, giường, nhà, túi"
    }

    this.loadProducts()
  
  }



  
  



  
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

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  



  
}

