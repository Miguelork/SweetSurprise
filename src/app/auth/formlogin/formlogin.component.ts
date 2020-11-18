import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router} from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.scss']
})
export class FormloginComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit(): void {
  }
  //Se leen los datos puestos y llama al método que inicia la sesión:
  login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth.emailAndPassword(email, password).then(credentials => {
      this.router.navigate(['/home'])
      alert("Login exitoso");

    }).catch(err => {
      alert(err.message);
    })
  }

  onGoogle(){
    this.auth.googleLogin();
  }

}
