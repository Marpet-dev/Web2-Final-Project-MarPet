import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';

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
  constructor(private _service: ProductsService, private _router: Router, private _activatedRoute: ActivatedRoute,
     private productsService: ProductsService) { }

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
  checkDog(c: string) {
    this.p = c.substring(0, 1) == "d" ? true : false;
    if(this.p==true){
      return   "visibility";
    }
    else{
      return "hidden";
    }
  }
  navigateType(type: string):void {
    this._router.navigate(['/dog', type])
  }

 

 

}
