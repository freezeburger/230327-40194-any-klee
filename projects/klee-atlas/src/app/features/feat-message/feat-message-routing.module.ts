import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatMessageComponent } from './feat-message.component';

const routes: Routes = [
  {
    path:'',
    component:FeatMessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatMessageRoutingModule { }
