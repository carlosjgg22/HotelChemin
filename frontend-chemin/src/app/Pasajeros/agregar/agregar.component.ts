import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Pasajero } from 'src/app/Modelo/pasajero';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

 public nombre:String;
 public apellido:String;
 public fechanacimiento:String;
 public nacionalidad:String;
 public pasaporte:String;
 public direccion:String;
 public email:String; 
 public telefono:Number; 

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(){

    let obj={
      nombre:this.nombre,
      apellido:this.apellido,
       fechanacimiento:this.fechanacimiento,
       nacionalidad:this.nacionalidad,
       pasaporte:this.pasaporte,
      direccion:this.direccion,
       email:this.email,
       telefono:this.telefono
    }; 

    this.service.createPasajero(obj);
    alert("Se han guardado los registros")
    this.router.navigate(["Listar"]);

   
  }
}
