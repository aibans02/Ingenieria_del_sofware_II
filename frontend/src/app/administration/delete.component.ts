import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
    selector: 'administration-delete',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.css']
})
export class DeleteDialog implements OnInit {

    constructor(public dialog: MatDialog) { 
    }

    close() {
        this.dialog.closeAll();
    }

    delete() {
        this.dialog.closeAll();
    }

    ngOnInit() {
    }
}