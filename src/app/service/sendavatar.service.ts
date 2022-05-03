import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendavatarService {

  private stageSource = new Subject<any>();
  stage$ = this.stageSource.asObservable();
  message:any;
  constructor() { }
  setMessage(data: any){
    this.message=data;
  }
  getMessage(){
    return this.message
  }
  sendStage(st: any){
    this.stageSource.next(st);
  }
}