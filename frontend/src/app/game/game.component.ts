import { Component} from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface GameNode { 
  name: string;
  path: string;
  children?: GameNode[];
}

const TREE_DATA: GameNode[] = [
  {
    name: 'Juego',
    path: 'game',
    children: [
      {name: 'Foro', path: 'forums'},
      {name: 'Guias', path: 'guides'},
      {name: 'Noticias - Actualizaciones', path: 'news-updates'},
      {name: 'Soporte', path: 'support'},
    ]
  }, {
    name: 'Juego',
    path: 'game',
    children: [
      {name: 'Foro', path: 'forums'},
      {name: 'Guias', path: 'guides'},
      {name: 'Noticias - Actualizaciones', path: 'news-updates'},
      {name: 'Soporte', path: 'support'},
    ]
  }, {
    name: 'Juego',
    path: 'game',
    children: [
      {name: 'Foro', path: 'forums'},
      {name: 'Guias', path: 'guides'},
      {name: 'Noticias - Actualizaciones', path: 'news-updates'},
      {name: 'Soporte', path: 'support'},
    ]
  }, {
    name: 'Juego',
    path: 'game',
    children: [
      {name: 'Foro', path: 'forums'},
      {name: 'Guias', path: 'guides'},
      {name: 'Noticias - Actualizaciones', path: 'news-updates'},
      {name: 'Soporte', path: 'support'},
    ]
  }, {
    name: 'Juego',
    path: 'game',
    children: [
      {name: 'Foro', path: 'forums'},
      {name: 'Guias', path: 'guides'},
      {name: 'Noticias - Actualizaciones', path: 'news-updates'},
      {name: 'Soporte', path: 'support'},
    ]
  }, {
    name: 'Juego',
    path: 'game',
    children: [
      {name: 'Foro', path: 'forums'},
      {name: 'Guias', path: 'guides'},
      {name: 'Noticias - Actualizaciones', path: 'news-updates'},
      {name: 'Soporte', path: 'support'},
    ]
  }, {
    name: 'Juego',
    path: 'game',
    children: [
      {name: 'Foro', path: 'forums'},
      {name: 'Guias', path: 'guides'},
      {name: 'Noticias - Actualizaciones', path: 'news-updates'},
      {name: 'Soporte', path: 'support'},
    ]
  }, {
    name: 'Juego',
    path: 'game',
    children: [
      {name: 'Foro', path: 'forums'},
      {name: 'Guias', path: 'guides'},
      {name: 'Noticias - Actualizaciones', path: 'news-updates'},
      {name: 'Soporte', path: 'support'},
    ]
  }, {
    name: 'Juego',
    path: 'game',
    children: [
      {name: 'Foro', path: 'forums'},
      {name: 'Guias', path: 'guides'},
      {name: 'Noticias - Actualizaciones', path: 'news-updates'},
      {name: 'Soporte', path: 'support'},
    ]
  }, {
    name: 'Juego',
    path: 'game',
    children: [
      {name: 'Foro', path: 'forums'},
      {name: 'Guias', path: 'guides'},
      {name: 'Noticias - Actualizaciones', path: 'news-updates'},
      {name: 'Soporte', path: 'support'},
    ]
  }, {
    name: 'Juego',
    path: 'game',
    children: [
      {name: 'Foro', path: 'forums'},
      {name: 'Guias', path: 'guides'},
      {name: 'Noticias - Actualizaciones', path: 'news-updates'},
      {name: 'Soporte', path: 'support'},
    ]
  }, 
];

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

  constructor() {
    this.dataSource.data = TREE_DATA;
    this.showScrollbar = false;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

}
