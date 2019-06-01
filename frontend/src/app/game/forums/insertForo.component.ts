import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
    selector: 'app-insert-foro',
    templateUrl: './insertForo.component.html',
    styleUrls: ['./insertForo.component.css']
})
export class InsertForoDialog implements OnInit {

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
    }

    enviar() {

    }
}