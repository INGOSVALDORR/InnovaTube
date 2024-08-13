import { Component } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  constructor( private router: Router) { }
  navigateToLogin() {
    this.router.navigate(['']);
  }
  insertar(registro: {correo: string; nombre: string; usuario: string; contrasena: string;}){
    console.log(registro);
  }


}
