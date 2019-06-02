import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { InsertNewsUpdatesDialog } from './insertNews-updates.component';

@Component({
  selector: 'app-news-updates',
  templateUrl: './news-updates.component.html',
  styleUrls: ['./news-updates.component.css']
})
export class NewsUpdatesComponent implements OnInit {

  id_juego: number;
  noticias = {}

  formatearFecha(fecha) {
    fecha = fecha.substring(0, 10)

    return fecha;
  }

  isAdmin() {
    let result = false;

    let rol = parseInt(JSON.parse(atob(localStorage.getItem('token').split(".")[1])).rol)

    if (rol == 1 || rol == 2)
      result = true

    return result
  }

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private dialog: MatDialog) {

    this.id_juego = parseInt(this.route.parent.snapshot.paramMap.get("id"));

  }

  ngOnInit() {
    this.noticias = {}
    let params = new HttpParams();
    params = params.append("VIDEOJUEGO_ID", this.id_juego.toString())

    this.httpClient.get('http://localhost:3000/noticias', {
      observe: 'response',
      params: params
    })
      .toPromise()
      .then(response => {
        this.noticias = response.body;
        console.log(response.body)
      })
      .catch(console.log);
  }

  enviar() {
    const dialogRef = this.dialog.open(InsertNewsUpdatesDialog, {
      width: '75%',
      data: { id_juego: this.id_juego }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

}
