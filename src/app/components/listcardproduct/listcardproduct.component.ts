import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CrudproductService } from 'src/app/services/crudproduct.service';

@Component({
  selector: 'app-listcardproduct',
  templateUrl: './listcardproduct.component.html',
  styleUrls: ['./listcardproduct.component.scss']
})
export class ListcardproductComponent implements OnInit {

  productos:Product[];
  product:Product={
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

  constructor(private crudp: CrudproductService) {
    this.crudp.listProducto().subscribe(prod=>{
      this.productos = prod;
      console.log(this.productos)
    })
  }

  ngOnInit(): void {
  }

}
