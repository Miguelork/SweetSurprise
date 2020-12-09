import { Component, OnInit } from '@angular/core';
import { Deseosmodel } from '../../models/DeseosModel';
import { Router, RouterModule } from '@angular/router';
import { DeseoDos } from '../../services/Deseos2.Service';
import { Product } from '../../models/product';



@Component({
  selector: 'app-perfildeseo',
  templateUrl: './perfildeseo.component.html',
  styleUrls: ['./perfildeseo.component.scss']
})
export class PerfildeseoComponent implements OnInit {

  productos: Deseosmodel[];
  producto2: Product
 

  constructor(private crudp: DeseoDos, private router:Router) {
    this.crudp.listProducto().subscribe(prod=>{
      this.productos = prod;
      console.log(this.productos)
      console.log(this.productos[0])
    })
  }

  ngOnInit(): void {
  }

 
  verDetalles(producto){
    let m=producto.id;
    console.log(m);
    this.router.navigate(['/detalle',m]);
  }

}
