import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { InsertGuidesDialog } from './insertGuides.component';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit {

  id_juego: number;
  guias = {}

  formatearFecha(fecha){
    fecha = fecha.substring(0,10)

    return fecha;
  }

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private dialog: MatDialog) {
    
    this.id_juego = parseInt(this.route.parent.snapshot.paramMap.get("id"));
    
   }

  ngOnInit() {
    this.guias = {}
    let params = new HttpParams();
    params = params.append("VIDEOJUEGO_ID", this.id_juego.toString())

    this.httpClient.get('http://localhost:3000/guias', {
      observe: 'response',
      params: params
    })
    .toPromise()
      .then(response => {
        this.guias = response.body;
        console.log(this.guias)
      })
      .catch(console.log);  
  }

  enviar() {
      const dialogRef = this.dialog.open(InsertGuidesDialog, {
          width: '75%',
          data: { id_juego:  this.id_juego }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
  }

}
