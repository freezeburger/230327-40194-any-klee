import { NgModule } from '@angular/core';
import { FeatAuthRoutingModule } from './feat-auth-routing.module';
import { FeatAuthComponent } from './feat-auth.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthRegisterComponent } from './components/auth-register/auth-register.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    FeatAuthComponent,
    AuthLoginComponent,
    AuthRegisterComponent
  ],
  imports: [
    SharedModule,
    FeatAuthRoutingModule
  ]
})
export class FeatAuthModule { }
