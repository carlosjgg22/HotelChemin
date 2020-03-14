import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import { Pasajero } from 'src/app/Modelo/pasajero';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  pasajeros:Pasajero[];
  constructor(private http:ServiceService, private router:Router) { }

  ngOnInit(): void {

    this.http.getPasajeros().subscribe(data=>{
      this.pasajeros=data;
    })
  }


}
