import { Component, OnInit, AfterViewChecked, TemplateRef} from '@angular/core';
import { CartService } from '../../services/carrito.service';
import { AuthService } from '../../auth/auth.service';
import { Cart } from '../../models/cart';
import { Product } from '../../models/product';
import { Router, Routes } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrdersService } from 'src/app/services/order.service';
import * as moment from 'moment';

declare let paypal: any;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {


  cart: any;
  total: number = 0;
  iva: number = 0;
  totalIva: number =0;
  User_id: string;
  extrasName: string;
  paypalLoad: boolean = true;
  addScript: boolean = false;

  constructor(
    private CartService: CartService,
    public auth: AuthService,
    private router: Router,
    private orderService: OrdersService
  ) { }

  ngOnInit(): void {
    this.auth.User.subscribe(user => {
      if(user){
          this.CartService.myCart(user.uid).subscribe(Cart => {
            this.cart = Cart.payload.data();
            this.User_id = user.uid;
            console.log(this.cart.products);
            this.getTotal();
          })
      }
    })
  }

  getTotal(){
    this.total = this.CartService.totalPrice(this.cart.products);
    console.log(this.total);
    this.totalIva = this.total;
  }

  Eliminar(product, index){
    let precio = this.cart.products[index].precio * this.cart.products[index].cantidad * 0.16
    this.totalIva = this.totalIva -precio;
    this.CartService.removeProduct(product, this.cart.id, index);
  }
  Limpiar(){
    this.CartService.resetCart(this.User_id);

  }

  Aumentar(index){
    this.cart.products[index].cantidad = this.cart.products[index].cantidad + 1;
    this.totalIva = this.totalIva +this.cart.products[index].precio 
  }

  Restar(index){
    if(this.cart.products[index].cantidad < 2){
      alert("No se puede bajar ya la cantidad del producto ya que tienes 1, si desea eliminar el producto, toque el boton de eliminar")
    }else {
    this.cart.products[index].cantidad = this.cart.products[index].cantidad - 1;
    this.totalIva = this.totalIva - this.cart.products[index].precio 
    }
  }

  

  

  

  paypalConfig = {
    env: 'sandbox',


    client: {
        sandbox: 'AQwaJwbRghOntt9EVkFSHPrIrsvdZysAwTo4EfvDbUsvcgAg-aPOOOBiOPgvI1IB5VW46X_CP30lJ1PJ',
        production: '<production-key>'
    },
    commit: true,
    payment: (data, actions) => {
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: { total: this.totalIva , currency: 'USD' }
                    }
                ]
            }
        })
    },
  
    // onAuthorize() is called when the buyer approves the payment
    onAuthorize:(data, actions) => {
  
        // Make a call to the REST api to execute the payment
        return actions.payment.execute().then((payment) => {
            window.alert('Payment Complete!');
            this.PruebaToOrder();
        })
    }
  };
  
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    if(!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = true;
      })
    }
  }

  addPaypalScript(){
      this.addScript = true;
      return new Promise((resolve, reject) => {
        let scriptElement = document.createElement('script');
        scriptElement.src = 'https://www.paypalobjects.com/api/checkout.js'
        scriptElement.onload = resolve;
        document.body.appendChild(scriptElement);
      })
  }

  PruebaToOrder(){
    let order: Order = {
      id: null,
      uid: this.User_id,
      product: this.cart.products,
      amount: this.totalIva,
      created_at: moment(new Date).format('DD/MM/YYYY')
    };

    this.orderService.save(order);
    this.CartService.resetCart(this.User_id).then(() => {
      this.router.navigate(['perfil']);
      alert("compraExitosa");
    })
  }

  

}


