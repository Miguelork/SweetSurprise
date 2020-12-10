import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CrudproductService {
  private productosCollection: AngularFirestoreCollection<Product>;
  private productos: Observable<Product[]>;
  productoDoc: AngularFirestoreDocument<Product>;

  constructor(private db: AngularFirestore) { 
    this.productosCollection = db.collection<Product>('product');
    this.productos = this.productosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Product;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ); 
  }
  listProducto(){
    return this.productos;
  } 

  listProductoB(parametro, valor){
    this.db.collection<Product>('product').ref.where(parametro,"==",valor).get().then(function(querySanpshot){
      querySanpshot.forEach(function(doc){
        console.log(doc.id,"",doc.data());
      });
    });
  }


  getProducto(id) {
    return this.db.collection('product').doc(id).valueChanges()
  } 
  

  agregarProducto(producto: Product){
    this.productosCollection.add(producto);
  }
  eliminarProducto(producto){
    this.productoDoc = this.db.doc<Product>(`product/${producto.id}`);
    this.productoDoc.delete();
  }
  editarProducto(producto){
    this.productoDoc = this.db.doc<Product>(`product/${producto.id}`);
    this.productoDoc.update(producto);
  }

}
