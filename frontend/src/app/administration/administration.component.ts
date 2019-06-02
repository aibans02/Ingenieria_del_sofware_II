import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeleteDialog } from './delete.component';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  token = localStorage.getItem('token');

  usuariosSuper = []
  usuariosAdmin = []
  usuariosNormal = []
  juegos = {}

  formatearFecha(fecha) {
    fecha = fecha.substring(0, 10)

    return fecha;
  }

  isSuperAdmin() {
    let result = false;

    let rol = parseInt(JSON.parse(atob(localStorage.getItem('token').split(".")[1])).rol)

    if (rol == 1)
      result = true

    return result
  }

  constructor(public dialog: MatDialog, private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.usuariosSuper = []
    this.usuariosAdmin = []
    this.usuariosNormal = []
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", localStorage.getItem('token'))

    this.httpClient.get('http://localhost:3000/administracion', {
      headers: headers,
      observe: 'response'
    })
      .toPromise()
      .then(response => {
        let todosUsuarios = response.body[0]

        for (let i = 0; i < todosUsuarios.length; i++) {
          if (todosUsuarios[i].ROL_ID == 1) {

            this.usuariosSuper.push(todosUsuarios[i])

          } else if (todosUsuarios[i].ROL_ID == 2) {

            this.usuariosAdmin.push(todosUsuarios[i])

          } else {

            this.usuariosNormal.push(todosUsuarios[i])

          }
        }

        this.juegos = response.body[1]
      })
      .catch(console.log);
  }

  supportOptions(id) {
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px',
      data: { id_soporte: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  newsUpdatesOptions(id) {
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px',
      data: { id_noticias: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  guidesOptions(id) {
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px',
      data: { id_guias: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  foroOptions(id) {
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px',
      data: { id_foro: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  subForoOptions(id) {
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px',
      data: { id_subforo: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  superuserOptions(id) {
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px',
      data: { id_superAdmin: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  adminOptions(id) {
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px',
      data: { id_admin: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  clientOptions(id) {
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px',
      data: { id_user: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  gameOptions(id) {
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px',
      data: { id_juego: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  newSuperuser() {

  }

  newAdmin() {

  }

  newClient() {

  }

  newGame() {

  }

  newForo() {

  }

  newSubforo() {

  }

  newGuide() {

  }

  newNewsUpdates() {

  }

}
