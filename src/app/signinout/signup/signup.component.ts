import { Component, OnInit } from '@angular/core';
import { RouterModule, Router} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 signupForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

}
