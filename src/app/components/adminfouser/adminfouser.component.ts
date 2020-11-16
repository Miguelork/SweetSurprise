import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CruduserService } from 'src/app/services/cruduser.service';

@Component({
  selector: 'app-adminfouser',
  templateUrl: './adminfouser.component.html',
  styleUrls: ['./adminfouser.component.scss']
})
export class AdminfouserComponent implements OnInit {

  usuario:User={
    email:'',
    name:'',
    role:'customer',
    contrasena:''
  }
  a='admin';
  c='customer';

  constructor(private crudu: CruduserService) { }
 
  ngOnInit(): void {
  }

  agregar(){
    this.crudu.agregarUsuario(this.usuario);
    this.usuario.name ='';
    this.usuario.email='';
    this.usuario.role='customer';
    this.usuario.contrasena='';
  }

}
