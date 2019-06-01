import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
    selector: 'app-insert-foro',
    templateUrl: './insertForo.component.html',
    styleUrls: ['./insertForo.component.css']
})
export class InsertForoDialog implements OnInit {

    constructor(private dialogRef: MatDialogRef<InsertForoDialog>) { 
        dialogRef.disableClose = true;
    }

    send() {
        this.dialogRef.close();
    }

    ngOnInit() {
    }
}