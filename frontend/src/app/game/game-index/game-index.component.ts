import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-game-index',
  templateUrl: './game-index.component.html',
  styleUrls: ['./game-index.component.css']
})

export class GameIndexComponent implements OnInit {

  id_juego: number;

  constructor(private route: ActivatedRoute) {
    this.id_juego = parseInt(this.route.parent.snapshot.paramMap.get("id"));
    console.log(this.id_juego )
  }

  ngOnInit() {
  }

}
