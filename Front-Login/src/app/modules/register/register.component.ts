import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/registro';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registro: Registro = {
    id: 0,
    nombre: "",
    apellido: "",
    email: "",
    contrasena: "",
    confirmContrasena: ""
  }
  datatable: any = []

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  
  }

  onAddRegistro(registro: Registro): void{
    this.loginService.addRegistro(registro).subscribe(respuesta =>{
      if(respuesta){
        alert("Registro completado!");
        this.clear();
      } else {
        alert("Error al registrarse")
      }
    });
  }

  clear(){
    this.registro.nombre = "";
    this.registro.apellido = "";
    this.registro.email = "";
    this.registro.contrasena = "";
    this.registro.confirmContrasena = ""; 
  }


}
