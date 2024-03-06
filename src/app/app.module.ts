import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AreasComunesComponent } from 'src/crud/AreasComunes.component';
import { AreasComunesDetailComponent } from 'src/crud/AreasComunes-detail.component';
 import { ReservasComponent } from 'src/crud/Reservas.component';
import { ReservasDetailComponent } from 'src/crud/Reservas-detail.component';
 import { UsuariosComponent } from 'src/crud/Usuarios.component';
import { UsuariosDetailComponent } from 'src/crud/Usuarios-detail.component';
import { LogComponent } from './log/log.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
 @NgModule({
  declarations: [
    AppComponent,
AreasComunesComponent,
AreasComunesDetailComponent,
 ReservasComponent,
ReservasDetailComponent,
 UsuariosComponent,
UsuariosDetailComponent,
LogComponent,
LoginComponent,
 ],
imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }