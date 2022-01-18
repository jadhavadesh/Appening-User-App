import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Subject, take, tap } from 'rxjs';
import { AuthResponse } from '../appInterface/auth-response.interface';
import { config } from '../config';
import { User } from '../models/user.model';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user= new Subject<User>();
  isAuthenticated=false;
  private tokenExpirationTimer:any;
  constructor(private http:HttpClient, private router:Router, private errorService:ErrorService) { }
  signup(email: any, password: any){
   return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.API_KEY}`, {
      email:email,
      password:password,
      returnSecureToken:true
    } ).pipe(
      catchError(err=>{
        return this.errorService.handleError(err)
      }),
      tap(res=>{
        this.authenticatedUser(res.email, res.localId, res.idToken, +res.expiresIn)
      })
    )
  }

  signin(email: any, password: any){
  return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.API_KEY}`, {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
      catchError(err=>{
        return this.errorService.handleError(err)
      }),
      tap(res=>{
        
        this.authenticatedUser(res.email, res.localId, res.idToken, +res.expiresIn)
      })
    )
  }

  autoSignIn(){
    const userData = JSON.parse(localStorage.getItem('UserData')!);
   console.log(userData)
  if(!userData){
    return;
  }

  const loggedInUser = new User(userData.email, userData.id, userData._token, userData._tokenExpirationDate);
  if(loggedInUser.token){
    this.isAuthenticated=true;
    this.user.next(loggedInUser);

    const expirationDuration =new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
    this.autoSignOut(expirationDuration)
    
  }
  
}

signOut(){
  localStorage.removeItem('UserData');
  this.isAuthenticated=false;
  this.router.navigate(['signin'])

  if(this.tokenExpirationTimer){
    clearTimeout(this.tokenExpirationTimer)
  }
  this.tokenExpirationTimer=null
}

  autoSignOut(expirationDuration:number){
    this.tokenExpirationTimer = setTimeout(()=>{
      this.signOut();
    }, expirationDuration)
  }


  private authenticatedUser(email: string, userId: string, token: string, expiresIn: number){
    const expirationDate = new Date(new Date().getTime() +expiresIn*1000);
    const user = new User(email, userId, token,expirationDate);
    console.log('user=>', user)
    this.user.next(user);
    this.autoSignOut(expiresIn*1000)

     localStorage.setItem('UserData', JSON.stringify(user)) 
    
  }
}
