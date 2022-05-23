import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { customValidator, passwordValidator } from 'src/app/validators/check.validators';
import { User } from '../../models/user';
import { RegisterService } from '../../service/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
users: any;


  public regForm:any;
 

  user:User = new User();

  constructor(private _formBuilder: FormBuilder,private _service: RegisterService, @Inject(Injector) private injector: Injector) { }

  private get _toast(): ToastrService {
    return this.injector.get(ToastrService);
  }

  ngOnInit(): void {
    this.regForm = this._formBuilder.group({
      // username: ['', [Validators.required, Validators.minLength(3), customValidator(/\@|\#|\$|\%|\^|\&/g)]],
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPass: ['', [Validators.required, Validators.minLength(8)]],
      phonenumber:['', [Validators.required, Validators.pattern("^((\\+84-?)|0)?[0-9]{9}$")]],
      fullName:['', Validators.required, Validators.minLength(8)],
      address:['', Validators.required]
    }, {
      validators: [passwordValidator]
    });

    // this.getUserData()
  }
 
  // MustMatch(controlName: string, matchingControlName:string){
  //   return(formGroup: FormGroup)=>{
  //     const control = formGroup.controls[controlName];
  //     const matchingControl = formGroup.controls[matchingControlName];
  //     if(matchingControl.errors && !matchingControl.errors.mustMatch){
  //       return
  //     }
  //     if(control.value !== matchingControl.value){
  //       matchingControl.setErrors({MustMatch:true})
  //     }
  //     else{
  //       matchingControl.setErrors(null)
  //     }
  //   }
  // }

  // getUserData(){
  //   this._service.getAllUsers().subscribe({
  //     next: (data) => {this.users = data},
  //     error: error => console.log(error)
  //   })
  // }

  submitUserData(form:NgForm){
    console.log(form.value)
    Object.assign(this.user, form.value)
    console.log('Model: ',this.user)
  if (this.user._id=='') {
  this._service.postUser(this.user).subscribe(res=>{
    let resUserData=JSON.parse(JSON.stringify(res));
    if(resUserData.message ==="Success"){
      this._toast.success("Created Successfully!","Created");
    }else{
      alert("Failed!");
    }
  })
} else {
 alert("Existed!");
}
  }
}
