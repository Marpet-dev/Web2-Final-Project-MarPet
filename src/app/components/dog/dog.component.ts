import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  getType: any;
  p: boolean = false;
  constructor(private _service:ProductsService, private _router: Router, private _activatedRoute: ActivatedRoute,
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

 

 

}
