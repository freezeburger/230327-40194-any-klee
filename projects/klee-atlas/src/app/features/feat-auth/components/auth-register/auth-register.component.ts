import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent {

  public loginForm = new FormGroup({
    email:new FormControl('', [ Validators.minLength(3), Validators.required , kleeEmailValidator() ]),
    password:new FormControl(''),
  })
}

export function kleeEmailValidator(): ValidatorFn {
 
  return (control:AbstractControl) : ValidationErrors | null => {

      if (!control.value)  return null;

      const emailValid = /.*@kleegroup.com$/.test(control.value);

      return emailValid ? null : { kleeEmail:true };
  }
}
