import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenConfirmDialogComponent } from '../user/open-confirm-dialog/open-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  openConfirmDialog(){
    return this.dialog.open(OpenConfirmDialogComponent,{
       
       panelClass: 'confirm-dialog-container',
       disableClose:true
     });
   }
}
