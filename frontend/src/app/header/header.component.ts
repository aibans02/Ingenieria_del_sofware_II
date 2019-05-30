import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LogInDialog } from './log-in.component';
import { RegisterDialog } from './register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token = localStorage.getItem('token');

  constructor(public dialog: MatDialog, private router: Router, ) { }

  logOut() {
    localStorage.removeItem('token');
    this.token = localStorage.getItem('token');
    this.router.navigate(["/"]);
  }

  isAdmin() {
    if (localStorage.getItem('token')) {
      let result = false;

      let aux = localStorage.getItem('token')
      aux = aux.split(".")[1]
      aux = JSON.parse(atob(aux));

      switch (aux['rol']) {
        case 1:
        case 2:
          result = true;
          break;
        case 3:
          result = false;
          break;
      }
      return result;
    }
  }


  openLogIn(): void {
    const dialogRef = this.dialog.open(LogInDialog, {
      width: '380px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.token = localStorage.getItem('token');
      this.router.navigate(["/"]);
    });
  }

  openRegister(): void {
    const dialogRef = this.dialog.open(RegisterDialog, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.token = localStorage.getItem('token');
      this.router.navigate(["/"]);
    });
  }

  ngOnInit() {

  }

}