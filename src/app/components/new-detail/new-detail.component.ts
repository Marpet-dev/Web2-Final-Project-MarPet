import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import news from '../../../assets/data/subnews.json'
import hnews from '../../../assets/data/homeNews.json'

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.css']
})
export class NewDetailComponent implements OnInit {
selectedId: any;
selectedTitle: any;
newDetail: any;
// hnewDetail: any;
// selectId: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (param) =>{
        let id = param.get ('id')
        console.log(id)
        if (id != null){
          this.selectedId = parseInt(id);
          let item = news.filter(item => item.id === this.selectedId)[0]
          this.newDetail = item
        }
      }
    )
    // this.activatedRoute.paramMap.subscribe(
    //   (param) =>{
    //     let id = param.get ('id')
    //     if (id != null){
    //       this.selectId = parseInt(id);
    //       let hitem = hnews.filter(item => item.id === this.selectId)[0]
    //       this.hnewDetail = hitem
    //     }
    //   }
    // )
      }
      isSelected(data:any){
        return data.id === this.selectedId;
      }
      // isSelect(data:any){
      //   return data.id === this.selectId;
      // }
  }


