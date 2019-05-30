import { Component} from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {HttpClient} from  "@angular/common/http";

interface GameNode { 
  name: string;
  path: string;
  children?: GameNode[];
}

const TREE_DATA: GameNode[] = [];

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

  showScrollbar:boolean;

  constructor(private httpClient: HttpClient) {

    this.httpClient.get('http://localhost:3000/videojuegos', {
      observe: 'response'
    })
    .toPromise()
    .then(response => {
      let res = response.body;
     
      for (var [key, value] of Object.entries(res)) {
        let json = {
          name: value.NOMBRE_JUEGO,
          path: 'game',
          children: [
            {name: 'Foro', path: 'forums'},
            {name: 'Guias', path: 'guides'},
            {name: 'Noticias - Actualizaciones', path: 'news-updates'},
            {name: 'Soporte', path: 'support'},
          ]
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