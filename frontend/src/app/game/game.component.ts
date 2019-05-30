import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { HttpClient } from "@angular/common/http";

interface GameNode {
  name: string;
  path: string;
  children?: GameNode[];
}

var TREE_DATA: GameNode[] = [];

interface FlatNode {
  expandable: boolean;
  name: string;
  path: string;
  level: number;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  private transformer = (node: GameNode, level: number) => {

    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      path: node.path,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  showScrollbar: boolean;

  constructor(private httpClient: HttpClient) {

    TREE_DATA = [];

    this.httpClient.get('http://localhost:3000/videojuegos', {
      observe: 'response'
    })
      .toPromise()
      .then(response => {
        let res = response.body;
        let children = [];

        for (var [key, value] of Object.entries(res)) {

          if (localStorage.getItem('token') != null) {
            children = [
              { name: 'Foro', path: value.VIDEOJUEGO_ID + '/forums' },
              { name: 'Guias', path: value.VIDEOJUEGO_ID + '/guides' },
              { name: 'Noticias - Actualizaciones', path: value.VIDEOJUEGO_ID + '/news-updates' },
              { name: 'Soporte', path: value.VIDEOJUEGO_ID + '/support' },
            ]
          } else {
            children = [
              { name: 'Foro', path: value.VIDEOJUEGO_ID + '/forums' },
              { name: 'Guias', path: value.VIDEOJUEGO_ID + '/guides' },
              { name: 'Noticias - Actualizaciones', path: value.VIDEOJUEGO_ID + '/news-updates' }
            ]
          }
          
          let json = {
            name: value.NOMBRE_JUEGO,
            path: value.VIDEOJUEGO_ID,
            children: children
          }
          TREE_DATA.push(json)
        }
        this.dataSource.data = TREE_DATA;
        this.showScrollbar = false;
      })
      .catch(console.log);


  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

}
