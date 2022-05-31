import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subnewsList: any[] = [];
  homeNewsList: any[]=[];
  selectedId: any;

  constructor(private _subnew: NewsService, private _homeNews: NewsService, private _router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

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

  
  }

  onselect(data: any): void {
    this._router.navigate(['/news', data])
  }
  isSelected(s: any): boolean {
    return s.id === this.selectedId
  }
  

  }


