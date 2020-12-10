import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Deseosmodel } from '../models/DeseosModel';

@Injectable({
  providedIn: 'root'
})
export class DeseoDos {
  private productosCollection: AngularFirestoreCollection<Deseosmodel>;
  private productos: Observable<Deseosmodel[]>;
  productoDoc: AngularFirestoreDocument<Deseosmodel>;

  constructor(private db: AngularFirestore) { 
    this.productosCollection = db.collection<Deseosmodel>('ListaDeseos');
    this.productos = this.productosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Deseosmodel;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  listProducto(){
    return this.productos;
  }

  getProducto(id) {
    return this.db.collection('ListaDeseos').doc(id).valueChanges()
  } 

  agregarProducto(producto: Deseosmodel){
    this.productosCollection.add(producto);
  }
  eliminarProducto(producto: Deseosmodel){
    this.productoDoc = this.db.doc<Deseosmodel>(`ListaDeseos/${producto.uid}`);
    this.productoDoc.delete();
  }
  editarProducto(producto){
    this.productoDoc = this.db.doc<Deseosmodel>(`ListaDeseos/${producto.id}`);
    this.productoDoc.update(producto);
  }

}