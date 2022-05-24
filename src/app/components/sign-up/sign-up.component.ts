import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator, passwordValidator } from 'src/app/validators/check.validators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public regForm:any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this._formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), customValidator(/\@|\#|\$|\%|\^|\&/g)]],
      email: ['', Validators.email],
      pass: ['', [Validators.required, Validators.minLength(8)]],
      confirmPass: ['', [Validators.required, Validators.minLength(8)]],
      phonenumber:['', [Validators.required, Validators.pattern("^((\\+84-?)|0)?[0-9]{9}$")]],
      address:['', Validators.required]
    }, {
      validators: [passwordValidator]
    })
  }
  get username(){
    return this.regForm.controls['username']
  }
}
