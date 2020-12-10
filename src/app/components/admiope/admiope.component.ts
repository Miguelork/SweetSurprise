import { Component, OnInit } from '@angular/core';
import { Deseosmodel } from '../../models/DeseosModel';
import { Router, RouterModule } from '@angular/router';
import { OrdersService } from '../../services/order.service';
import { Order } from '../../models/order';
import { AuthService } from '../../auth/auth.service';
import { Subject, combineLatest } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-admiope',
  templateUrl: './admiope.component.html',
  styleUrls: ['./admiope.component.scss']
})
export class AdmiopeComponent implements OnInit {
  isCollapsed = true;
  orders: any
  searchterm: string = "";
  startAt = new Subject();
  endAt = new Subject();
  startObs = this.startAt.asObservable();
  endObs = this.endAt.asObservable();
  addScript: boolean = false;
  selectedOrder: any;
  paypalLoad: boolean = true;
  constructor(
    private ordersService: OrdersService,
    private auth: AuthService, 
    private afs: AngularFirestore,
    private orderService: OrdersService,) {}

  ngOnInit() {
    this.getOrders();
}
getOrders() {
  this.auth.User.subscribe(user => {
    if(user){
      this.ordersService.getorders(user.uid).subscribe(orders => this.orders = orders);
      combineLatest(this.startObs, this.endObs).subscribe((value) => {
        this.firequery(value[0], value[1], user.uid).subscribe((ordenes) => {
          this.orders = ordenes;
        })
      })
    }
  })
}
firequery(start,end, uid){
  return this.afs.collection('orders', ref => ref.orderBy('created_at').where("uid", "==", uid).where("created_at", ">=", start)).valueChanges();  
}

}
