import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListarComponent } from './Pasajeros/listar/listar.component';
import { AgregarComponent } from './Pasajeros/agregar/agregar.component';
import { EditarComponent } from './Pasajeros/editar/editar.component';
import {FormsModule} from '@angular/forms';
import {ServiceService} from '../app/Service/service.service'
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
