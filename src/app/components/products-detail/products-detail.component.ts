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
  bigImage: any = 0;
  errMsg: string = '';
  getId: string = '';
  productList : any;
  constructor(private _service: ProductsService, private _activatedRoute: ActivatedRoute, private cartService : CartService,private api : ApiService) { }
  quantity: number = 1;
  slides = [
    { img: 'https://via.placeholder.com/600.png/09f/fff' },
    { img: 'https://via.placeholder.com/600.png/021/fff' },
    { img: 'https://via.placeholder.com/600.png/321/fff' },
    { img: 'https://via.placeholder.com/600.png/422/fff' },
    { img: 'https://via.placeholder.com/600.png/654/fff' },
  ];
  slideConfig2 = { 
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // // dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: true,
        },
      },
    ],
    arrows:false, // 2 cái nút previous và next!
    vertical:true,
   };
   addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  ngOnInit(): void {
    this.api.getProduct()
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
  addtoCart(item: any){
    this.cartService.addToCart(item);
    
  }
  showImg(i: any){
    this.bigImage= i;
  }

  plus()
  {
   this.quantity = this.quantity+1;
  }
  minus()
  {
    if(this.quantity > 1)
  {
   this.quantity = this.quantity-1;
  }
}
}
