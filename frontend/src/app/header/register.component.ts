import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';
import { LogInDialog } from './log-in.component'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./header.component.css']
})
export class RegisterDialog implements OnInit {

    constructor(public dialog: MatDialog) { }

    openLogIn(): void {
        const dialogClose = this.dialog.closeAll();
        const dialogRef = this.dialog.open(LogInDialog, {
            width: '380px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    ngOnInit() {
    }
}