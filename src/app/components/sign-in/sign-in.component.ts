import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator, passwordValidator } from 'src/app/validators/check.validators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public regForm:any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this._formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), customValidator(/\@|\#|\$|\%|\^|\&/g)]],
      email: ['', Validators.email],
      pass: ['', [Validators.required, Validators.minLength(8)]],
      confirmPass: ['', Validators.required]
    },  {Validators: [passwordValidator]})
  }

  // get pass(){
  //   return this.regForm.controls['pass']
  // }
}
