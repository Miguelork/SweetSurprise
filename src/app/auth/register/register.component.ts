import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from '@angular/fire/auth';
import { Title } from "@angular/platform-browser";
import { Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: 'register.component.html',
  styleUrls: ['../auth.styles.css']
})


export class RegisterformComponente implements OnInit {

  constructor(
    public auth: AuthService,
    public afs: AngularFirestore,
    public title: Title,
    public router: Router,
  ) { }

  ngOnInit() {
    this.title.setTitle('Registro');
  }

  public onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const password2 = form.value.password2;
    const nombre2 = form.value.nombre2;
    const apellido2 = form.value.apellido2;
    if(password == password2) {
      this.auth.signUp(email, password).then((userCredentials) => {
        const FireUser = userCredentials.user;
        alert("Registro Exitoso");
  
        const data = {
          uid: FireUser.uid,
          email: email,
          nombre: nombre2,
          apellido: apellido2,
          role: 'customer'
        };
      
        this.afs.collection('users').doc(FireUser.uid).set(data)
        .then(()=> {
          this.auth.emailAndPassword(email, password).then(() => {
            this.router.navigate(['/home]']);
          }).catch(err => {
            alert(err.message);
          })
        }).catch(err => {
          alert(err.message);
        })
      }).catch(err => {
        alert(err.message);
      })
    } else{
      alert("Las contraseñas no coinciden");
    }
    }
    

}

