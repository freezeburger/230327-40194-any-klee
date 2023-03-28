import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatAuthComponent } from './feat-auth.component';

const routes: Routes = [
  {
    path:/* auth/ */'login',
    component:FeatAuthComponent
  },
  {
    path:/* auth/ */'register',
    component:FeatAuthComponent
  },
  {
    path:'**',
    redirectTo:'register',
    pathMatch:'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatAuthRoutingModule { }
