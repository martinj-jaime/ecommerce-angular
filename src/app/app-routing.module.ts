import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"ingresar", component:LoginComponent},
  {path:"registrarse", component:RegistroComponent},
  {path:":id", component:DetalleComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ], 
  exports: [RouterModule, CommonModule]
})

export class AppRoutingModule { }
