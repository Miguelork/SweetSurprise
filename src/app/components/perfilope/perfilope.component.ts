import { Component, OnInit } from '@angular/core';
import { Deseosmodel } from '../../models/DeseosModel';
import { Router, RouterModule } from '@angular/router';
import { OrdersService } from '../../services/order.service';
import { Order } from '../../models/order';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-perfilope',
  templateUrl: './perfilope.component.html',
  styleUrls: ['./perfilope.component.scss']
})
export class PerfilopeComponent implements OnInit {

 
  productos: any;
  User_id: string;

  constructor(private crudp: OrdersService, private router:Router, public auth: AuthService) {
    this.crudp.getorders()
    this.productos = this.crudp;
  }
uctor() { }

  ngOnInit(): void {
    this.auth.User.subscribe(user => {
      if(user){
          this.crudp.myordersRef(user.uid).subscribe(Cart => {
            this.productos = Cart.payload.data();
            this.User_id = user.uid; 
          })
      }
    })
  }

}
