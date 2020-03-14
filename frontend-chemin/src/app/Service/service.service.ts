import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pasajero } from '../Modelo/pasajero';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor( private http:HttpClient) { }

  //referencia al backend!!
  url='http://localhost:8080/';

  getPasajeros(){
    return this.http.get<Pasajero[]>(this.url+"/pasajeros/listar");
  }

createPasajero(obj){
  this.http.post(this.url+'pasajeros/savepasajero',JSON.stringify(obj)).subscribe(x=>{
      console.log(x);
    },err=>{
      console.log(err);
    })
}

}
