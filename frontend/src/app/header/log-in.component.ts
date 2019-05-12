import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterDialog } from './register.component'
import { PasswordRecoveryDialog } from './password-recovery.component';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./header.component.css']
})
export class LogInDialog implements OnInit {

    constructor(public dialog: MatDialog) { }

    openRegister(): void {
        const dialogClose = this.dialog.closeAll();
        const dialogRef = this.dialog.open(RegisterDialog, {
            width: '450px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    openPasswordRecovery(): void {
        const dialogRef = this.dialog.open(PasswordRecoveryDialog, {
            width: '420px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    ngOnInit() {
    }
}