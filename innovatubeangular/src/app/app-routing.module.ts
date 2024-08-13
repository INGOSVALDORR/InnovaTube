import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VideoBusquedaComponent } from './video-busqueda/video-busqueda.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  //{ path: 'login' , component: LoginComponent}
  {path:'Video', component: VideoBusquedaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
