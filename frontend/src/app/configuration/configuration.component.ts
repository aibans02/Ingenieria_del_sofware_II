import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  token = localStorage.getItem('token');

  nick = new FormControl('', [Validators.required])
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required])

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  cambiarNombre() {
    let headers = new HttpHeaders();
    if (localStorage.getItem('token') != null)
      headers = headers.append("Authorization", localStorage.getItem('token'))

    let params = new HttpParams();
    params = params.append("NICK", this.nick.value.toString())

    this.httpClient.put('http://localhost:3000/usuario/auth', {
      headers: headers,
      observe: 'response',
      params: params
    })
      .toPromise()
      .then(response => {

      })
      .catch(console.log);
  }

  cambiarEmail() {
    let headers = new HttpHeaders();
    if (localStorage.getItem('token') != null)
      headers = headers.append("Authorization", localStorage.getItem('token'))

    let params = new HttpParams();
    params = params.append("EMAIL", this.email.value.toString())

    this.httpClient.put('http://localhost:3000/usuario/auth', {
      headers: headers,
      observe: 'response',
      params: params
    })
      .toPromise()
      .then(response => {

      })
      .catch(console.log);
  }

  cambiarPassword() {
    let headers = new HttpHeaders();
    if (localStorage.getItem('token') != null)
      headers = headers.append("Authorization", localStorage.getItem('token'))

    let params = new HttpParams();
    params = params.append("PASSWORD", this.password.value.toString())

    this.httpClient.put('http://localhost:3000/usuario/auth', {
      headers: headers,
      observe: 'response',
      params: params
    })
      .toPromise()
      .then(response => {

      })
      .catch(console.log);
  }

  eliminar() {

  }

}
