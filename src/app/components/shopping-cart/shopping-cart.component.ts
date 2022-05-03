import { SendavatarService } from 'src/app/service/sendavatar.service';
import { Component, OnInit, Input } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  // public imgSrc:any;
  // constructor() { }
  message:any;
  constructor(private stageColorService: SendavatarService) { }

  ngOnInit() {

    // this.stageColorService.stage$
    // .subscribe(
    //   image => {
    //     // console.log('image subscription'+ image);
    //       this.imgSrc = document.getElementById("avatarString")
    //     });
    this.message=this.stageColorService.getMessage()
}

}
