import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeleteDialog } from'./delete.component';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  supportOptions(){
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px'
    });
  }

  newsUpdatesOptions(){
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px'
    });
  }

  guidesOptions(){
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px'
    });
  }

  foroOptions(){
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px'
    });
  }

  subForoOptions(){
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px'
    });
  }

  superuserOptions(){
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px'
    });
  }

  adminOptions(){
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px'
    });
  }

  clientOptions(){
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px'
    });
  }

  gameOptions(){
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px'
    });
  }

  newSuperuser(){

  }

  newAdmin(){

  }

  newClient(){

  }

  newGame(){

  }

  newForo(){

  }

  newSubforo(){

  }

  newGuide(){

  }

  newNewsUpdates(){

  }

}
