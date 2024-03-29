import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasComunesDetailComponent } from 'src/crud/AreasComunes-detail.component';
import { AreasComunesComponent } from 'src/crud/AreasComunes.component';
import { ReservasDetailComponent } from 'src/crud/Reservas-detail.component';
import { ReservasComponent } from 'src/crud/Reservas.component';
import { UsuariosDetailComponent } from 'src/crud/Usuarios-detail.component';
import { UsuariosComponent } from 'src/crud/Usuarios.component';
import { LoginComponent } from './login/login.component';
import { LogComponent } from './log/log.component';
import { from } from 'rxjs';
import { InfoUsuarioComponent } from 'src/crud/info-usuario.component';

const routes: Routes = [
{path: '',component:LoginComponent},
{path: 'land',component:LogComponent},
{path: 'log',component:LoginComponent},
{path: 'AreasComunes', component:AreasComunesComponent}, 
{path: 'Reservas', component:ReservasComponent}, 
{path: 'Usuarios', component:UsuariosComponent}, 
{path: 'resdet', component:ReservasDetailComponent},
{path: 'InfoUsuario', component:InfoUsuarioComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }