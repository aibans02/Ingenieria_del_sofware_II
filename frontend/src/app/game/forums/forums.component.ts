import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { InsertForoDialog } from './insertForo.component';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {

  id_juego: number;
  foro = {}

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {

    this.id_juego = parseInt(this.route.parent.snapshot.paramMap.get("id"));
    
    let params = new HttpParams();
    params = params.append("VIDEOJUEGO_ID", this.id_juego.toString())

    this.httpClient.get('http://localhost:3000/foro', {
      observe: 'response',
      params: params
    })
    .toPromise()
      .then(response => {
        this.foro = response.body;
        console.log(this.foro)
      })
      .catch(console.log);  
   }

  ngOnInit() {
  }

}
