import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export function customValidator(regexp: RegExp): ValidatorFn{
    return (control:AbstractControl):{[key:string]:any} | null=>{
            const check = regexp.test(control.value)
            return check ? {nameNotMatch: {value:control.value}} : null
    }
}

export function passwordValidator(control: AbstractControl):{[key:string]:any} | null{
    const password = control.get('password');
    const confirmPass = control.get('confirmPass');
    if (password && password.pristine || (confirmPass && confirmPass.pristine)){
        return null;
    }
    return password && confirmPass && password.value !== confirmPass.value ? {misMatch: true} : null
}


