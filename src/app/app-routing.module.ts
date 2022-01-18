import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { SigninComponent } from './signinout/signin/signin.component';

const routes: Routes = [
  
  {
    path:'', redirectTo:'signin', pathMatch:'full'
  },
  {
    path:'signin', component:SigninComponent
  },
  {
    path:'Dash',canActivate:[AuthGuard],  loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
