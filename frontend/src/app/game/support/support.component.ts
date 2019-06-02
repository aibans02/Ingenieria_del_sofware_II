import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  token = localStorage.getItem('token');
  id_juego: number;
  tickets = {}

  formatearFecha(fecha){
    fecha = fecha.substring(0,10)

    return fecha;
  }

  send(){
    
  }

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    this.id_juego = parseInt(this.route.parent.snapshot.paramMap.get("id"));

    let headers = new HttpHeaders();
    if (localStorage.getItem('token') != null)
      headers = headers.append("Authorization", localStorage.getItem('token'))

    let params = new HttpParams();
    params = params.append("VIDEOJUEGO_ID", this.id_juego.toString())

    this.httpClient.get('http://localhost:3000/soporte', {
      headers: headers,
      observe: 'response',
      params: params
    })
      .toPromise()
      .then(response => {
        this.tickets = response.body;
        console.log(this.tickets)
      })
      .catch(console.log);
  }

  ngOnInit() {
  }

}
