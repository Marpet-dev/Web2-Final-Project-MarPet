import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/service/login.service';
import { customValidator, passwordValidator } from 'src/app/validators/check.validators';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public regForm:any;
  user: User = new User();
  // loading: boolean = false;
  // sumitted:boolean = false;
  // returnUrl: string ;

  constructor(private _formBuilder: FormBuilder, private _service: LoginService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.regForm = this._formBuilder.group({
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPass: ['', Validators.required]
    },  {Validators: [passwordValidator]})
  }

  // get pass(){
  //   return this.regForm.controls['pass']
  // }
  // login(){
  //   this.sumitted=true;
  //   console.log('hello')

  //   if(this.regForm.invalid){
  //     return;
  //   }
  //   this.loading=true;

//   this._service.postUser(this.user).subscribe({next: res=>{
//       console.log('hello');
//       this.toastr.success('Successfully !');
//   },
//   error:err=>{
//     console.log(err.message);
//     this.toastr.error('failure')
//   }
// }
//   )



}


