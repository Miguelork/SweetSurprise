import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CrudproductService } from 'src/app/services/crudproduct.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {
  productos:Product[];

  constructor(private crudp: CrudproductService) { 
    this.crudp.listProducto().subscribe(prod=>{
      this.productos = prod;
      console.log(this.productos)
    })
    
  }

  ngOnInit(): void {
  }


}
