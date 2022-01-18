import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateUserFormComponent } from './update-user-form/update-user-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {
    path:'Dashboard', component:UserHomeComponent
  },
  {
    path:'add-user', component:UserFormComponent
  },
  {
    path:'update', component:UpdateUserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
