import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-index',
  templateUrl: './app-index.component.html',
  styleUrls: ['./app-index.component.css']
})
export class AppIndexComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor() { }

  ngOnInit() {
  }

}
