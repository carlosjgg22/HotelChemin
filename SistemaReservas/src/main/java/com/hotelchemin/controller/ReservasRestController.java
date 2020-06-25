package com.hotelchemin.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.google.gson.Gson;
import com.hotelchemin.repositorio.IRepositorioPass;
import com.hotelchemin.modelo.Pasajero;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class ReservasRestController {

	@Autowired 
	IRepositorioPass pasajeroRepositorio; 
	List<Pasajero> listaPasajero = new ArrayList<Pasajero>();

	
	
	@PostMapping(value = "pasajeros/savepasajero")

	public ResponseEntity<String> savePassenger(@RequestBody String pasajero) {
		
		Pasajero pass1 = new Gson().fromJson(pasajero, Pasajero.class);
		System.out.println(pass1);
		this.pasajeroRepositorio.save(pass1);
		
		System.out.print(pass1.toString());
		ResponseEntity<String> response = new ResponseEntity<String>("Se guardo el usuario", HttpStatus.OK);
		return response;
		
	}
	
	
	  @GetMapping(value = "pasajeros/listar")
	   public List<Pasajero> getPassenger() {
			 
	   listaPasajero= (List<Pasajero>) pasajeroRepositorio.findAll();
		  	  
		
			  return listaPasajero;
			  
				
			}
	
	

}
