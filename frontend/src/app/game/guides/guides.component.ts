import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    
    this.id_juego = parseInt(this.route.parent.snapshot.paramMap.get("id"));
    
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

  ngOnInit() {
  }

}
