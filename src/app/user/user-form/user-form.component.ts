import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  users= new FormGroup({
    name:new FormControl('', [Validators.required]),
    email:new FormControl('',[Validators.required, Validators.email]),
    address:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
  })
  submitted = false;

  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
  }
  get getform() {
    return this.users.controls;
  }
  collectInfo(){
    this.apiService.saveInfo(this.users.value).subscribe((result)=>{
      console.log(result);
      
      this.users.reset({});
        this.router.navigate(['Dash/Dashboard'])
    })
  }

}
