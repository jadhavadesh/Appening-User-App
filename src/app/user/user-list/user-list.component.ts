import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, concat, debounceTime, of, Subject, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  collection: any;
  data:any;
  public zoneName$ = new Subject();
  formValue:any = FormGroup;
  constructor(private http:HttpClient, private router:Router, private apiService:ApiService, private dialog:DialogService, private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.apiService.getList().pipe(
      catchError(_err=> of('there was an error'))
    ).subscribe((result)=>{
      console.warn(result);
      this.collection=result;
    })

    this.formValue = this.formbuilder.group({
      name:[''],
      email:[''],
      address:[''],
     
      phone:['']
    })
  }

  delete(item:any)
  {
//   
  this.dialog.openConfirmDialog()
  .afterClosed().subscribe((res:any)=>{
    if(res){
      this.collection.splice(item-1,1)
   this.apiService.deleteUser(item).subscribe((result)=>{
    console.warn(result);
    });
  }
});
  }
  


  onEdit(item:any){
    console.log(item.id)
   
    this.formValue.id = item.id
    this.apiService.editCurrentUser(this.formValue.id).subscribe(result=>{
    this.formValue.controls['name'].setValue(item.name);
    this.formValue.controls['email'].setValue(item.email);
    this.formValue.controls['address'].setValue(item.address);
    
    this.formValue.controls['phone'].setValue(item.phone);
    

  })
  }

  updateUserDetails(){
    console.log(this.formValue.value)
   
    this.apiService.updateUser(this.formValue.id,this.formValue.value).subscribe(res=>{
      alert("updated successfully");
      
      this.formValue.reset();
      this.router.navigate(['Dash/Dashboard']);
    })
       
       }
       btnClick(){
         this.router.navigate(['/Dash/Dashboard']);
       }

        

    
}
