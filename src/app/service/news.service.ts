import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INews } from '../interface/news';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
subnewsUrl: string="./assets/data/subnews.json"
newsUrl: string="./assets/data/homeNews.json"

  constructor(private _http: HttpClient) { }
  getSubNews(): Observable<INews[] > {
    return this._http.get<INews[]>(this.subnewsUrl);  
}
  getHomeNews(): Observable<INews[] > {
    return this._http.get<INews[]>(this.newsUrl);  
}
}
