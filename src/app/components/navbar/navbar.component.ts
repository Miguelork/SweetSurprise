import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from 'src/app/models/user';
import { CruduserService } from 'src/app/services/cruduser.service';
import { CartService } from '../../services/carrito.service';
import { Cart } from '../../models/Cart';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  
  cart: any;
  constructor(public auth: AuthService, private crudu: CruduserService, private cartService: CartService) { }

  ngOnInit(): void {
    this.auth.User.subscribe(data => {
      if(data){
      if(data.role == 'customer') {
        const cartRef = this.cartService.myCartRef(data.uid).get();
        cartRef.then((cart) => {
          if(cart.exists) {
            this.cartService.myCart(data.uid).subscribe(myCart => {
              this.cart = myCart.payload.data();
            })
          } else {
            this.cartService.createCart(data.uid);
            this.cartService.myCart(data.uid).subscribe(myCart => {
              this.cart = myCart.payload.data();
            })
          }
        })
      }
    }
    })
  }

  Salir(){
    this.auth.signOut();
    alert("Cerro sesión");

  }
}
