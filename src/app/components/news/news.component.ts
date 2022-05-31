import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  slides = [
    { img: 'https://via.placeholder.com/600.png/09f/fff' },
    { img: 'https://via.placeholder.com/600.png/021/fff' },
    { img: 'https://via.placeholder.com/600.png/321/fff' },
    { img: 'https://via.placeholder.com/600.png/422/fff' },
    { img: 'https://via.placeholder.com/600.png/654/fff' },
  ];
  slideConfig = { 
    slidesToShow: 3,
    slidesToScroll: 1,
    // dots: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    arrows:true, // 2 cái nút previous và next!
    // vertical:true,
   };
   slideConfig2 = { 
    slidesToShow: 3,
    slidesToScroll: 1,
    // // dots: true,
    // autoplay: true,
    autoplaySpeed: 2000,
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
    arrows:true, // 2 cái nút previous và next!
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
  subnewsList: any[] = [];
  homeNewsList: any[]=[];
  selectedId: any;

 

  constructor(private _subnew: NewsService, private _homeNews: NewsService, private _router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._subnew.getSubNews().subscribe(
      {
        next: (subnewsdata) => {
          this.subnewsList = subnewsdata
        }
      }
    )
    this._homeNews.getHomeNews().subscribe(
      {
        next: (homenewsdata) => {
          this.homeNewsList = homenewsdata
        }
      }
    )
    this.activatedRoute.paramMap.subscribe(
      (param) => {
        let id = param.get('id')
        if (id != null) {
          this.selectedId = parseInt(id);
        }
      }
    )
    // this.activatedRoute.paramMap.subscribe(
    //   (param) => {
    //     let hid = param.get('id')
    //     if (hid != null) {
    //       this.selectId = parseInt(hid);
    //     }
    //   }
    // )
  
  }

  onselect(data: any): void {
    this._router.navigate(['/news', data])
  }
  isSelected(s: any): boolean {
    return s.id === this.selectedId
  }
  // isSelect(h: any): boolean {
  //   return h.id === this.selectId
  // }

  


}
