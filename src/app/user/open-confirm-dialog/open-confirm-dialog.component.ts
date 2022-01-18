import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-open-confirm-dialog',
  templateUrl: './open-confirm-dialog.component.html',
  styleUrls: ['./open-confirm-dialog.component.css']
})
export class OpenConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OpenConfirmDialogComponent>, private apiService:ApiService) { }

  ngOnInit(): void {
  }

}
