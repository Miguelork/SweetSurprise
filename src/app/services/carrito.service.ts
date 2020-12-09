import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Cart } from "../models/cart";
import { Product } from "../models/product";
import { reject } from 'q';
import { isUndefined, isNullOrUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor(
    public auth: AuthService,
    private afs: AngularFirestore,
  ) { }

  createCart(id){
    this.afs.collection('carts').doc(id).set(
      {id: id, products: [], totalProducts: 0}
    )
  }

  myCart(uid){
    return this.afs.doc<Cart>(`carts/${uid}`).snapshotChanges();
  }

  myCartRef(uid){
    return this.afs.collection<Cart>('carts').doc(uid).ref;
  }

  addProduct(productToCart): Promise<any> {
    return new Promise((resolve, reject) => {
      this.auth.User.subscribe(data => {
        if(data){
          const cartRef = this.myCartRef(data.uid);
          cartRef.get().then(doc => {
            let cartData = doc.data();
            console.log(cartData);
            let productsInCart = cartData.products;
            const exist = CartService.findEqualProducts(productsInCart, productToCart);
            if(!exist){
              productsInCart.push(productToCart);
              cartData.totalProducts += 1;
            }else {
              exist.qty +=1;
              cartData.totalProducts +=1;
            }   
          return cartRef.update(cartData).then(() => {
            resolve(true);
          }).catch((err) => {
            reject(err);
          });
          })
        }
      })
    })
  }

  static findEqualProducts(productsInCart, product){
    if(!isNullOrUndefined(productsInCart)){
      for (let i = 0; i < productsInCart.length; i++) {
        if(productsInCart[i].nombre == product.nombre){   
              return productsInCart[i];
        }
      }
    }
    return null;
  }
  static totalProducts(product: Product[]) {
    let sum = 0;
    for (let i = 0; i < product.length; i++) {
      sum += parseInt(product[i]['qty'])
    }
    return sum;
  }

  resetCart(uid): Promise<any>{
    return new Promise((resolve, reject) => {
      const ref = this.myCartRef(uid);
      ref.get().then(doc => {
        let cartData = doc.data();
        cartData.products = [];
        cartData.totalProducts = 0;
        return ref.update(cartData).then(() => {
          resolve(true);
        }).catch((err) => {
          reject(err);
        })
      })
    })
  }

  totalPrice(products: Product[]): number {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += (parseInt(products[i]['qty']) * products[i]['price']);
    }
    return total;
  }

  removeProduct(product, uid, index): Promise<any> {
    return new Promise((resolve, reject) => {
      const ref = this.myCartRef(uid);
      ref.get().then(doc => {
        let cartData = doc.data();
        let productsInCart = cartData.products;
        let totalQty = cartData.totalProducts;
        cartData.totalProducts = parseInt(totalQty) - parseInt(product.qty);

        cartData.products = [
          ...productsInCart.slice(0, index),
          ...productsInCart.slice(index + 1)
        ];
        return ref.update(cartData).then(() => {
          resolve(true);
        }).catch((err) => {
          reject(err);
        })
      })
    })
  }

}