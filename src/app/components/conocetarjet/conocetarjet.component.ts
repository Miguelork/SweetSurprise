import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conocetarjet',
  templateUrl: './conocetarjet.component.html',
  styleUrls: ['./conocetarjet.component.scss']
})
export class ConocetarjetComponent implements OnInit {

  infoMiembros: Array<any> = [
    {nombre:'Miguelangel Somana',info:'lorem ipsum'},
    {nombre:'Kevin Hernandez',info:'lorem ipsum'},
    {nombre:'Ivan Sanchez',info:'lorem ipsum'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  /*getImage(i){
    switch(i){
      case 0:
        return "../../../assets/images/instagram.png"
      case 1:
        return "../../../assets/images/whatsapp.png"
      default:
        return "../../../assets/images/facebook.png"
    }
  }*/

}
