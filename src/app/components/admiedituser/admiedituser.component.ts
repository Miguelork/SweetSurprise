import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { CruduserService } from 'src/app/services/cruduser.service';

@Component({
  selector: 'app-admiedituser',
  templateUrl: './admiedituser.component.html',
  styleUrls: ['./admiedituser.component.scss']
})
export class AdmiedituserComponent implements OnInit {
  @Input() editUsuario:User={
    email:'',
    name:'',
    role:'',
    contrasena:''
  }
  a='admin';
  c='customer';

  constructor(private crudu: CruduserService) { }

  ngOnInit(): void {
  }
  editar(usuario){ 
    this.editUsuario = usuario;
  }

  aggUserEditado(){
    this.crudu.editarUsuario(this.editUsuario);
  }

}
