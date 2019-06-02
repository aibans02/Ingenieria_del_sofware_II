import { Component} from '@angular/core';
import { MatDialog} from '@angular/material';

@Component({
    selector: 'app-password-recovery',
    templateUrl: './password-recovery.component.html',
    styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryDialog {

    constructor(public dialog: MatDialog) { }

    recover() {
        this.dialog.closeAll();
    }
}