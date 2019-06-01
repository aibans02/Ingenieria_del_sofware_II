import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
    selector: 'app-insert-news-updates',
    templateUrl: './insertNews-updates.component.html',
    styleUrls: ['./insertNews-updates.component.css']
})
export class InsertNewsUpdatesDialog implements OnInit {

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
    }

    enviar() {

    }
}