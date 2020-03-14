import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ListarComponent } from './Pasajeros/listar/listar.component';
import { AgregarComponent } from './Pasajeros/agregar/agregar.component';
import { EditarComponent } from './Pasajeros/editar/editar.component';

const routes:Routes =[
  {path:'listar', component:ListarComponent},
  {path:'agregar', component:AgregarComponent},
  {path:'editar', component:EditarComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
