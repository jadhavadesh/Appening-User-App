import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-update-user-form',
  templateUrl: './update-user-form.component.html',
  styleUrls: ['./update-user-form.component.css']
})
export class UpdateUserFormComponent implements OnInit {
  alert:boolean=false;
  users= new FormGroup({
    name:new FormControl('', [Validators.required]),
    email:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
  })
  constructor(private router:ActivatedRoute, private routes:Router, private apiService:ApiService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id'])
    this.apiService.editCurrentUser(this.router.snapshot.params['id']).subscribe((result:any)=>{
     this.users = new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email']),
        phone: new FormControl(result['phone'])
      })
    })
  }
  collection()
{
  console.warn(this.users.value)
  this.apiService.updateUser(this.router.snapshot.params['id'],this.users.value).subscribe((result)=>{
    this.alert=true;
    this.users.reset();
    this.routes.navigate(['/Dash/Dashboard']);
  })
}
closeAlert()
{
  this.alert=false;
}

}
