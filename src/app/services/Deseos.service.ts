import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Deseosmodel } from '../models/DeseosModel';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class DeseoService {
  DeseoCollection: AngularFirestoreCollection<Deseosmodel>;
  DeseoDoc: AngularFirestoreDocument<Deseosmodel>;
  Deseos: Observable<Deseosmodel[]>;
  Deseo: Observable<Deseosmodel>;
  constructor( private afs: AngularFirestore) {
      this.DeseoCollection = this.afs.collection<Deseosmodel>('ListaDeseos', ref => ref);
   }
  
  InitializeCollectionUid(uid?: string){
    if(uid){
      this.DeseoCollection = this.afs.collection<Deseosmodel>('ListaDeseos', ref => ref.where('uid', '==', uid));
    }
  }
  getdeseos(uid?: string) {
    if(uid){
        this.DeseoDoc = this.afs.doc<Deseosmodel>(`ListaDeseos/${uid}`);
        this.Deseo = this.DeseoDoc.snapshotChanges().pipe(map(action => {
          if(action.payload.exists == false){
            return null;
          }else{
            const data = action.payload.data() as Deseosmodel;
            data.uid = action.payload.id;
            return data;
          }
        }));
        return this.Deseo;
    }
}

save(Deseo: Deseosmodel){
  this.DeseoCollection.doc(Deseo.uid).set(Deseo);
}
}