import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CrudproductService } from 'src/app/services/crudproduct.service';
import { Deseosmodel } from '../../models/DeseosModel';
import { DeseoService } from '../../services/Deseos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CartService } from '../../services/carrito.service';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
  Product: Product[] = [];
  Deseo: Deseosmodel;
  cargando = false;
  prod: any;
  id: any;
  selectedUser: User;
  user: any;

  @Input() infoProduc:Product={
    nombre:'',
    descripcion:'',
    categoria:'',
    precio:0,
    stock:0,
    fabricante:'',
    img1:null,
    img2:null,
    img3:null,
  } 

  

  constructor(private router:Router, private cart:CartService, private route:ActivatedRoute, private crudp:CrudproductService, public DeseoService: DeseoService, public auth: AuthService) { 
    
  }

  ngOnInit(): void { 
    this.auth.User.subscribe(user => {
      if(user){
        this.user = user;
          this.DeseoService.getdeseos(user.uid).subscribe(Deseos => {
          this.Deseo = Deseos;
          }) 
        }       
    this.id = user.uid;
    
      });
  }

  
 
  AgregarDeseos(id){
  
    let obj = this.Product.find(el => el.$key = id);
    let index = this.Product.findIndex(el => el.$key = id);
    this.Product[index] = obj;
  

    if(this.Deseo == null) {
      this.Deseo = {
        uid: this.user.uid,
        Productos: []
      };
    }
    

    this.Deseo.Productos.push(id)
    this.DeseoService.save(this.Deseo);
    alert("Se guardaron en la lista de deseo");
  

  }

  AgregarCarrito(infoProduc){
          this.cart.addProduct(this.infoProduc);


  }


}
