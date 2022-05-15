import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  slides = [
    { img: 'https://cdn-icons-png.flaticon.com/128/196/196578.png' },
    { img: 'https://cdn-icons-png.flaticon.com/128/196/196566.png' },
    { img: 'https://cdn-icons-png.flaticon.com/128/196/196539.png' },
    { img: 'https://cdn-icons-png.flaticon.com/128/196/196559.png' },
    { img: 'https://cdn-icons-png.flaticon.com/128/196/196543.png' },
    { img: 'https://cdn-icons-png.flaticon.com/128/5968/5968311.png' },
    { img: 'https://cdn-icons-png.flaticon.com/128/196/196556.png' },
    { img: 'https://cdn-icons-png.flaticon.com/128/6001/6001399.png' },
    { img: 'https://cdn-icons-png.flaticon.com/512/196/196577.png' },
    
  ];
  slideConfig = { 
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
    // arrows:true,
    // vertical:true
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
  constructor() { }

  ngOnInit(): void {
  }

}
