import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CruduserService {
  private usuariosCollection: AngularFirestoreCollection<User>;
  private usuarios: Observable<User[]>;
  private usuarioDoc: AngularFirestoreDocument<User>;

  constructor(private db: AngularFirestore) { 
    this.usuariosCollection = db.collection<User>('users');
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  listUsuario(){
    return this.usuarios;
  }
  agregarUsuario(usuario: User){
    this.usuariosCollection.add(usuario);
  }
  eliminarUsuario(usuario){
    this.usuarioDoc = this.db.doc<User>(`users/${usuario.id}`);
    this.usuarioDoc.delete();
  }
  editarUsuario(usuario){
    this.usuarioDoc = this.db.doc<User>(`users/${usuario.id}`);
    this.usuarioDoc.update(usuario);
  }
}
