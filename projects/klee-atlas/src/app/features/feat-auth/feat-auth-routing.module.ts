import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthNavigationComponent } from './components/auth-navigation/auth-navigation.component';
import { AuthRegisterComponent } from './components/auth-register/auth-register.component';
import { FeatAuthComponent } from './feat-auth.component';

const routes: Routes = [
  {
    path:/* auth */'',
    component:FeatAuthComponent,
    children:[
      {
        path:/* auth/ */'login',
        component:AuthLoginComponent
      },
      {
        path:/* auth/ */'register',
        component:AuthRegisterComponent
      },
      /* {
        path:'register',
        component:AuthNavigationComponent,
        outlet:'navigation'
      },
      {
        path:'login',
        component:AuthNavigationComponent,
        outlet:'navigation'
      }, */
      /* {
        path:'**',
        redirectTo:'register',
        pathMatch:'prefix'
      } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatAuthRoutingModule { }
