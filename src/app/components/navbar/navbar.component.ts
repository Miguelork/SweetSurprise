import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from 'src/app/models/user';
import { CruduserService } from 'src/app/services/cruduser.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  

  constructor(public auth: AuthService, private crudu: CruduserService) { }

  ngOnInit(): void {
  }

  Salir(){
    this.auth.signOut();
    alert("Cerro sesión");

  }
}
