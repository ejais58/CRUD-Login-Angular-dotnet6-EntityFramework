import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Login } from 'src/app/models/login';
import { Registro } from 'src/app/models/registro';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = {
    email: "",
    contrasena: ""
  }
  datatable: any = []
  
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.onDataTable();
  }

  onDataTable(){
    this.loginService.getRegistro().subscribe(resultado =>{
      this.datatable = resultado;
      console.log(resultado);
    });
  }

  onLoginValidate(login: Login){
    this.loginService.getRegistro().subscribe(registro =>{
      let item = Object.values(registro);
      console.log(this.login.email);
      item.find(objeto => {
         if(objeto.email === this.login.email){
            if(objeto.contrasena === this.login.contrasena){
              alert("Bienvenido "+ objeto.nombre);
              this.router.navigate(["/home"]);
            }
          }  
      });
    });
  }

}
