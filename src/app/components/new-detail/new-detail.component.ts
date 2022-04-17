import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.css']
})
export class NewDetailComponent implements OnInit {
selectedId: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (param) =>{
        let id = param.get ('id')
        if (id != null){
          this.selectedId = parseInt(id);
        }
      }
    )
      }
      isSelected(data:any){
        return data.id === this.selectedId;
      }
  }


