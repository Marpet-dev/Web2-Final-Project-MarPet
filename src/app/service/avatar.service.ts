import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  getProducts() {
    throw new Error('Method not implemented.');
  }
  // readonly address_api: string = "https://random-data-api.com/api/address/random_address";
  readonly avatar_api: string = "https://dog.ceo/api/breeds/image/random";
//   readonly push_api: string = "http://localhost:3000/push";
  constructor(private _http: HttpClient) { }

  getSampleData(){
    return this._http.get(this.avatar_api);
  }

//   sendNotification(info: PushSubscription){
//     return this._http.post(this.push_api, info).pipe(
//       catchError(this.handleError)
//     )
//   }
  handleError(error:any){
    return throwError(()=>{
      new Error(error.message)
    });
  }
}
