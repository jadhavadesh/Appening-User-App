import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { map, Observable,take } from 'rxjs';
import { AuthResponse } from 'src/app/appInterface/auth-response.interface';
import { AuthService } from 'src/app/services/auth.service';

declare let $: any;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form!: FormGroup;
  loginMode:boolean = true;
  error: any;
  
  
  constructor(private fb:FormBuilder,private routes: Router, private authService:AuthService) { 
    
  }

  ngOnInit(): void {
    this.form=this.fb.group({
      email:["", [Validators.required, Validators.email]],
      password:["", [Validators.required, Validators.minLength(8)]]

    });


    
  }



onModeSwitch(){
     this.loginMode = !this.loginMode;
   }
onSubmit(){
  if(this.form.valid){
    console.log(this.form.value)

    const email = this.form.value.email;
    const password = this.form.value.password;


    let authObservable : Observable<AuthResponse>

    if(this.loginMode){
      //...Login Request
      authObservable = this.authService.signin(email, password)
    }else{
      //...Signup request
      authObservable = this.authService.signup(email, password)
    }
    
    authObservable.subscribe(res=>{
      console.log(res)
      this.authService.isAuthenticated=true
         this.routes.navigate(['Dash/Dashboard']);
    },
    err=>{
      console.log(err)
      this.authService.isAuthenticated=false
         this.routes.navigate(['signin'])  
    });
    
}
 


}
}
