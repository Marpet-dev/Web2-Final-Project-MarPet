import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  products: any;
  errMsg: string = '';
  gachChan : string = "";
  constructor(private _service: ProductsService) { }

  ngOnInit(): void {
    this._service.getProducts().subscribe(
      {
        next: (data) => this.products = data,
        error: (err) => this.errMsg = err.message
      })
    
      
  }
 

}
