import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/models/loginUser';
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
  

   loading: boolean = false;
   sumitted:boolean = false;
   returnUrl='' ;
   userLogin: any;

  constructor(private _formBuilder: FormBuilder, private _service: LoginService,private toastr:ToastrService,private route: ActivatedRoute,private router: Router,_loginUser:LoginService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      //get product info ==> call api 
      // console.log(id);
// this.getUserData(id);
})

    this.regForm = this._formBuilder.group({
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(8)]]
    },  {Validators: [passwordValidator]})
  
  
  }
  
  // get pass(){
  //   return this.regForm.controls['pass']
  // }
  login(form:NgForm){
  //   console.log('Data: ',data);
  //   let loginForm=new FormData();
  // loginForm.append("id",data._id);
	// loginForm.append("email",data.email);
	// loginForm.append("password",data.password);
  // loginForm.append("fullName",data.fullName);
  // loginForm.append("phonenumber",data.phonenumber)
  // loginForm.append("address",data.address)
	// console.log("loginData:",loginForm);
   
  // this._service.postUser(loginForm).subscribe({
	// 	next: res=>{
	// 		console.log(res);
	// 	},
	// 	error:err=>{
	// 		console.log(err.message);
	// 	}
	// })
  Object.assign(this.user, form.value)
  // console.log('Model: ',this.user)

this._service.postUser(this.user).subscribe(res=>{
  if(this.user.email){
  console.log('thanh cong')
  alert('Dang nhap thanh cong');
  this.router.navigateByUrl('/home');
}else{
  alert('fail!')
}
})


}
// getUserData(id: any){
//   this._service.getUserInfo(id).subscribe({
//     next: data=>this.userLogin=data,
//     error: error=>console.log(error)
//   })
// }
 
}
