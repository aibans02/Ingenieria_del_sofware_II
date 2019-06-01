import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
    selector: 'app-insert-news-updates',
    templateUrl: './insertNews-updates.component.html',
    styleUrls: ['./insertNews-updates.component.css']
})
export class InsertNewsUpdatesDialog implements OnInit {

    constructor(private dialogRef: MatDialogRef<InsertNewsUpdatesDialog>) { 
        dialogRef.disableClose = true;
    }

    send() {
        this.dialogRef.close();
    }

    ngOnInit() {
    }
}