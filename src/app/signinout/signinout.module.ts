import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SigninoutRoutingModule } from './signinout-routing.module';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    
  
    SignupComponent
  ],
  imports: [
    CommonModule,
    SigninoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SigninoutModule { }
