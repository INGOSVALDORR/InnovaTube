import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'innovatubeangular';
  constructor(private router: Router) {}

  goToInicioSesion() {
    this.router.navigate(['/inicio-sesion']).catch(error => {
      console.error('Error during navigation:', error);
    });
  }

  goToHome() {
    this.router.navigate(['/']).catch(error => {
      console.error('Error during navigation:', error);
    });
  }
}
