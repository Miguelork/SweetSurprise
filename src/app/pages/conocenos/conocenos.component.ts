import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.scss']
})
export class ConocenosComponent implements OnInit {

  nombre:string="";
  info:string="";

  constructor() { 
    this.nombre="Conoce a nuestro grandioso Equipo";
    this.info="Toca una imagen para conocer la información del miembro seleccionado";
  }

  ngOnInit(): void {
  }

  setMember(n:number){
    switch(n){
      case 1:
        this.nombre='Miguelangel Somana';
        this.info='lorem ipsum habemus';
        break;
      case 2:
        this.nombre='Kevin Hernandez';
        this.info='lorem ipsum habemus';
        break;
      case 3:
        this.nombre='Ivan Sanchez';
        this.info='lorem ipsum habemus';
        break;
    }
  }

}
