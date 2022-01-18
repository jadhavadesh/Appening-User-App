import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url  = "http://localhost:3000/users";
  constructor(private http:HttpClient) { }
  getList(){
    return this.http.get(this.url);
  }
  saveInfo(data:any){
    return this.http.post(this.url, data)
  }
  deleteUser(id:any)
 {
   return this.http.delete(`${this.url}/${id}`)
 }
 getCurrentUser(id:any){
  return this.http.get(`${this.url}/${id}`)
 }
 editCurrentUser(id:any)
  {
    return this.http.get(`${this.url}/${id}`)
  }
 updateUser(id:any,data:any)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }
searchUser(id:any,data:any){
  return this.http.put(`${this.url}/${id}`,data)
}
}
