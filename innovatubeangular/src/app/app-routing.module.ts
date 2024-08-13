import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VideoBusquedaComponent } from './video-busqueda/video-busqueda.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  //{ path: 'login' , component: LoginComponent}
  {path:'Video', component: VideoBusquedaComponent},
  {path:'Registro', component: RegistroComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
