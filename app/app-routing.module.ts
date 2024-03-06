import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasComunesDetailComponent } from 'src/crud/AreasComunes-detail.component';
import { AreasComunesComponent } from 'src/crud/AreasComunes.component';
import { ReservasDetailComponent } from 'src/crud/Reservas-detail.component';
import { ReservasComponent } from 'src/crud/Reservas.component';
import { UsuariosDetailComponent } from 'src/crud/Usuarios-detail.component';
import { UsuariosComponent } from 'src/crud/Usuarios.component';
const routes: Routes = [
{path: 'AreasComunes', component:AreasComunesComponent}, 
{path: 'Reservas', component:ReservasComponent}, 
{path: 'Usuarios', component:UsuariosComponent}, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }