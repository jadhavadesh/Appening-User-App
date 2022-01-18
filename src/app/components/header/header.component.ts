import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
// import { FireauthService } from 'src/app/services/fireauth.service';
// import {AuthguardService} from '../../services/authguard.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
admin:any;
user:any;
 userImage="../../assets/user.jpg"
  constructor(private authservice:AuthService) { 
    // this.fireAuth.profileInfo.subscribe(res=>{
    //   this.user= res;
    //   console.log(this.user)

    //   this.userImage= localStorage.getItem("image")
    // })
  }

  ngOnInit(): void {
    // const name=this.auth.user;
    // this.admin=name

     
  }
  
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logout(){
    this.authservice.signOut()
   
  }
  
}
