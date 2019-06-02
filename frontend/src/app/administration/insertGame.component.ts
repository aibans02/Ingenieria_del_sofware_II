import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'app-insert-games',
    templateUrl: '/insertGame.component.html',
    styleUrls: ['./insertGame.component.css']
})
export class InsertGameDialog implements OnInit {

    titulo = new FormControl('', [Validators.required]);
    descripcion = new FormControl('', [Validators.required])

    //id_juego = this.data.id_juego;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<InsertGameDialog>, private route: ActivatedRoute, private httpClient: HttpClient) { 
        dialogRef.disableClose = true;
    }

    close() {
        this.dialogRef.close();
    }

    create() {
        /*if (localStorage.getItem('token') != null) {
            let headers = new HttpHeaders();
            headers = headers.append("Authorization", localStorage.getItem('token'))

            let idUsuario = JSON.parse(atob(localStorage.getItem('token').split(".")[1])).id

            this.httpClient.post("http://localhost:3000/guia/auth",
                {
                    "TITULO_ENTRADA": this.titulo.value,
                    "DESCRIPCION_TEXTO": this.descripcion.value,
                    "USUARIO_ID": idUsuario,
                    "VIDEOJUEGO_ID": this.id_juego,
                },
                {
                    headers: headers
                }
            )
                .subscribe(
                    data => {
                        this.dialogRef.close();
                    },
                    error => {
                        console.log("Error", error);
                    }
                );
        }*/
    }

    ngOnInit() {
    }
}