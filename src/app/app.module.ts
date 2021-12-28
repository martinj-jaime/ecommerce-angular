import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component'

// Se incluye aparte
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalleComponent,
    LoginComponent,
    RegistroComponent,
    NavigationComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }