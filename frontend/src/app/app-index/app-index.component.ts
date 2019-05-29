import { Component, OnInit } from '@angular/core';
import {HttpClient} from  "@angular/common/http";

@Component({
  selector: 'app-app-index',
  templateUrl: './app-index.component.html',
  styleUrls: ['./app-index.component.css']
})
export class AppIndexComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  juegos = {};
  breakpoint = 0;

  constructor(private httpClient: HttpClient) {

    this.httpClient.get('http://localhost:3000/videojuegos', {
      observe: 'response'
    })
    .toPromise()
    .then(response => {
      this.juegos = response.body;
    })
    .catch(console.log);

  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6; 
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }

}
