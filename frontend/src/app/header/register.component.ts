import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LogInDialog } from './log-in.component'
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterDialog implements OnInit {

    nick = new FormControl('', [Validators.required])
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required])

    constructor(public dialog: MatDialog, private httpClient: HttpClient) { }

    openLogIn(): void {
        const dialogClose = this.dialog.closeAll();
        const dialogRef = this.dialog.open(LogInDialog, {
            width: '380px'
        });

        dialogRef.afterClosed().subscribe(result => {
            
        });
    }

    ngOnInit() {
    }

    register() {
        
        
        this.httpClient.post("http://localhost:3000/usuario",
            {
                "EMAIL": this.email.value,
                "PASSWORD": this.password.value,
                "NICK_USUARIO": this.nick.value,
                "FECHA_NACIMIENTO": new Date(),
                "ROL_ID": "3"
            })
            .subscribe(
                data => {
                    
                },
                error => {
                    console.log("Error", error);
                }
            );
    }
}