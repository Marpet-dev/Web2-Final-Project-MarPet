import { AvatarService } from '../../service/avatar.service'
import { SendavatarService } from '../../service/sendavatar.service';
import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem : number = 0;
  public searchTerm: string = '';
  avatarRandom: any;
  
  // message: any;
  message="https://images.dog.ceo/breeds/springer-english/n02102040_1266.jpg";
  constructor(private scroll: ViewportScroller, private _service: AvatarService, private stageColorService: SendavatarService, private cartService : CartService) { }
  // message:any;
  // message=document.getElementById("avatarString")?.innerText;
  ngOnInit(){
    this.cartService.getProductData()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
    this._service.getSampleData().subscribe({
      next: data=>{
        // console.log(data);
        this.avatarRandom=data;
        console.log(document.getElementById("avatarString")?.id);
        console.log("Try first:"+this.avatarRandom.message);
        // this.stageColorService.setMessage(this.message) --ko dc, phải ở ngoài

      }
    })
    this.stageColorService.setMessage(this.message);
    // this.stageColorService.setMessage(this.avatarRandom.message);
    // console.log("sdad"+this.avatarRandom.message);
    // const canv =document.getElementById('avatarCustomer') as HTMLCanvasElement;
    // this.stageColorService.sendStage(canv.toDataURL()); // use service to send image to color component
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }
  // sendPattern(){
  //   const canv = document.getElementById('avatarCustomer') as HTMLCanvasElement;
  //   this.stageColorService.sendStage(canv.toDataURL()); // use service to send image to color component
  // };

  // search(event:any){
  //  this.searchTerm = (event.target as HTMLInputElement).value;
  // console.log(this.searchTerm);
  // this.cartService.search.next(this.searchTerm);
  // }
}
