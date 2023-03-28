import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    title:'Klee - AUTH',
    loadChildren:() => import('./features/feat-auth/feat-auth.module').then( m => m.FeatAuthModule)
  },
  {
    path:'news',
    title:'Klee - NEWS',
    loadChildren:() => import('./features/feat-news/feat-news.module').then( m => m.FeatNewsModule)
  },
  {
    path:'message',
    title:'Klee - MESSAGE',
    loadChildren:() => import('./features/feat-message/feat-message.module').then( m => m.FeatMessageModule)
  },
  {
    path:'**',
    redirectTo:'auth',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
