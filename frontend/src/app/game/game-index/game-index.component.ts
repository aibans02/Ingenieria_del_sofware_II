import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from "@angular/common/http";


@Component({
  selector: 'app-game-index',
  templateUrl: './game-index.component.html',
  styleUrls: ['./game-index.component.css']
})

export class GameIndexComponent implements OnInit {

  token = localStorage.getItem('token');
  id_juego: number;
  juego = {};

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    
    this.id_juego = parseInt(this.route.parent.snapshot.paramMap.get("id"));

    let params = new HttpParams();
    params = params.append("VIDEOJUEGO_ID", this.id_juego.toString())

    this.httpClient.get('http://localhost:3000/videojuego', {
      observe: 'response',
      params
    })
      .toPromise()
      .then(response => {
        this.juego = response.body;
      })
      .catch(console.log);


  }

  ngOnInit() {
  }

}
