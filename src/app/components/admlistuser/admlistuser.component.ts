import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CruduserService } from 'src/app/services/cruduser.service';

@Component({
  selector: 'app-admlistuser',
  templateUrl: './admlistuser.component.html',
  styleUrls: ['./admlistuser.component.scss']
})
export class AdmlistuserComponent implements OnInit {
  usuarios:User[];
  user:User={
    email:'',
    name:'',
    role:'',
    contrasena:''
  }

  constructor(private crudu: CruduserService) { 
    this.crudu.listUsuario().subscribe(us=>{
      this.usuarios = us;
      console.log(this.usuarios)
    })
  }

  ngOnInit(): void {
  }

  eliminar(usuarios){
    this.crudu.eliminarUsuario(usuarios);
  }

  almacenaUs(usuarios){
    this.user = usuarios;
    alert(this.user);
  }

}
