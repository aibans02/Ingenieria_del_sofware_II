import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterDialog } from './register.component'
import { PasswordRecoveryDialog } from './password-recovery.component';
import { HttpClient } from "@angular/common/http";
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.css']
})
export class LogInDialog implements OnInit {

    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required])

    getErrorMessageEmail() {
        return this.email.hasError('required') ? 'Introduzca un valor' :
            this.email.hasError('email') ? 'Email no válido' :
                '';
    }

    constructor(public dialog: MatDialog, private httpClient: HttpClient) { }



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
        });
    }

    ngOnInit() {
    }

    logIn() {
        
        this.httpClient.post("http://localhost:3000/token",
            {
                "EMAIL": this.email.value,
                "PASSWORD": this.password.value
            })
            .subscribe(
                data => {
                    localStorage.setItem('token',data['token']);
                    this.dialog.closeAll();
                    console.log(localStorage.getItem('token'))
                },
                error => {
                    console.log("Error", error);
                }
            );



    }
}