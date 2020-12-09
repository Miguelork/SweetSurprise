import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/users.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { async, Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';






@Component({
  selector: 'app-perfilform',
  templateUrl: './perfilform.component.html',
  styleUrls: ['./perfilform.component.scss']
})
export class PerfilformComponent implements OnInit {
  selectedUser: User;

  constructor(public auth: AuthService, public user: UserService, public afAuth: AngularFireAuth, private firestore: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit(): void{
    this.getCurrentUser();

  }
  getCurrentUser() {
    this.auth.User.subscribe(user => { this.selectedUser = user; });
  }

  


   

  public async Cambio(form: NgForm) {
    const password = form.value.password;
    const password2 = form.value.password2;
    const password3 = form.value.password3;
    if(password == password2){
      
        // tslint:disable-next-line: prefer-const
        let user = this.afAuth.currentUser;
        
        (await user).updatePassword(password).then(()=> {
            alert("Password was changed");
          }).catch((error => {
            alert(error.message);
          }));
      
    }else{
      alert("las contraseñas no son iguales")
      return; 
    }

  }
}
