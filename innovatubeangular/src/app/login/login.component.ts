import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  imageUrl: string = 'src/assets/images/flecha.png';
  constructor( private router: Router) { }

  navigateToVideo() {
    this.router.navigate(['/Video']);
  }
  navigateToRegistro() {
    this.router.navigate(['/Registro']);
  }

}
