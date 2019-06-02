import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';


@Component({
    selector: 'administration-delete',
    templateUrl: './delete.component.html',
    styleUrls: ['./delete.component.css']
})
export class DeleteDialog implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private dialogRef: MatDialogRef<DeleteDialog>, private httpClient: HttpClient) {

    }

    close() {
        this.dialog.closeAll();
    }

    delete() {
        let headers = new HttpHeaders();
        headers = headers.append("Authorization", localStorage.getItem('token'))

        if (this.data.id_foro) {

            let params = new HttpParams();
            params = params.append("FORO_ID", this.data.id_foro.toString())

            this.httpClient.delete("http://localhost:3000/foro/auth",
                {
                    headers: headers,
                    params: params
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

        } else if (this.data.id_subforo) {
            console.log(this.data.id_subforo)
            let params = new HttpParams();
            params = params.append("FORO_ID", this.data.id_subforo.toString())

            this.httpClient.delete("http://localhost:3000/foro/auth",
                {
                    headers: headers,
                    params: params
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


        } else if (this.data.id_guias) {

            let params = new HttpParams();
            params = params.append("GUIA_ID", this.data.id_guias.toString())

            this.httpClient.delete("http://localhost:3000/guia/auth",
                {
                    headers: headers,
                    params: params
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


        } else if (this.data.id_noticias) {

            let params = new HttpParams();
            params = params.append("NOTICIA_ACTUALIZACION_ID", this.data.id_noticias.toString())

            this.httpClient.delete("http://localhost:3000/noticia/auth",
                {
                    headers: headers,
                    params: params
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

        } else if (this.data.id_soporte) {

            let params = new HttpParams();
            params = params.append("SOPORTE_ID", this.data.id_soporte.toString())

            this.httpClient.delete("http://localhost:3000/noticia/auth",
                {
                    headers: headers,
                    params: params
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

        } else if (this.data.id_superAdmin) {

            let params = new HttpParams();
            params = params.append("USUARIO_ID", this.data.id_superAdmin.toString())

            this.httpClient.delete("http://localhost:3000/usuario/auth",
                {
                    headers: headers,
                    params: params
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

        } else if (this.data.id_admin) {

            let params = new HttpParams();
            params = params.append("USUARIO_ID", this.data.id_admin.toString())

            this.httpClient.delete("http://localhost:3000/usuario/auth",
                {
                    headers: headers,
                    params: params
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

        } else if (this.data.id_user) {

            let params = new HttpParams();
            params = params.append("USUARIO_ID", this.data.id_user.toString())

            this.httpClient.delete("http://localhost:3000/usuario/auth",
                {
                    headers: headers,
                    params: params
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

        } else if (this.data.id_juego) {
            let params = new HttpParams();
            params = params.append("VIDEOJUEGO_ID", this.data.id_juego.toString())

            this.httpClient.delete("http://localhost:3000/videojuego/auth",
                {
                    headers: headers,
                    params: params
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

        }


    }

    ngOnInit() {
    }
}