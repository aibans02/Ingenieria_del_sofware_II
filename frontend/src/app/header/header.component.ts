import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogInDialog, {
      width: '380px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'LogIn.html',
})
export class LogInDialog {

  constructor(
    public dialogRef: MatDialogRef<LogInDialog>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}