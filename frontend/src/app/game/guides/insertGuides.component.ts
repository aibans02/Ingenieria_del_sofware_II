import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
    selector: 'app-insert-guides',
    templateUrl: '/insertGuides.component.html',
    styleUrls: ['./insertGuides.component.css']
})
export class InsertGuidesDialog implements OnInit {

    constructor(private dialogRef: MatDialogRef<InsertGuidesDialog>) { 
        dialogRef.disableClose = true;
    }

    send() {
        this.dialogRef.close();
    }

    ngOnInit() {
    }
}