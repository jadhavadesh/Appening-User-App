import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UpdateUserFormComponent } from './update-user-form/update-user-form.component';
import { OpenConfirmDialogComponent } from './open-confirm-dialog/open-confirm-dialog.component';

import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    UserHomeComponent,
    UserListComponent,
    UserFormComponent,
    UpdateUserFormComponent,
    OpenConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class UserModule { }
