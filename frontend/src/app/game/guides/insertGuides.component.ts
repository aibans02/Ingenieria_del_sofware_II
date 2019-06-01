import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
    selector: 'app-insert-guides',
    templateUrl: '/insertGuides.component.html',
    styleUrls: ['./insertGuides.component.css']
})
export class InsertGuidesDialog implements OnInit {

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
    }

    enviar() {

    }
}