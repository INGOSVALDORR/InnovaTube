import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { RegistrodataService } from '../registrodata.service'; 


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  nuevoDato = { nombre: '', correo: '', usuario: '', contrasena: '' };

  constructor(private registrodataService: RegistrodataService, private router: Router) {}
  navigateToLogin() {
    this.router.navigate(['']);
  }
  agregarDato(): void {
    this.registrodataService.postDatos(this.nuevoDato).subscribe({
      next: (response) => {
        console.log(response);
        // Aquí puedes manejar la respuesta, como limpiar el formulario o mostrar un mensaje
        this.nuevoDato = { nombre: '', correo: '', usuario: '', contrasena: '' };
      },
      error: (error) => {
        console.error('Error al agregar dato:', error);
        // Manejar el error de la solicitud
      }
    });
  }
}
