import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LogInDialog } from './log-in.component'
import { RegisterDialog } from './register.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openLogIn(): void {
    const dialogRef = this.dialog.open(LogInDialog, {
      width: '380px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openRegister(): void {
    const dialogRef = this.dialog.open(RegisterDialog, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}