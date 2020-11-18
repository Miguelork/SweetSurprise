import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CrudproductService } from 'src/app/services/crudproduct.service';

@Component({
  selector: 'app-adminfoproduct',
  templateUrl: './adminfoproduct.component.html',
  styleUrls: ['./adminfoproduct.component.scss']
})
export class AdminfoproductComponent implements OnInit {

  producto:Product={
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

  constructor(private crudp: CrudproductService) { }

  ngOnInit(): void {
  }

  agregar(){
    this.crudp.agregarProducto(this.producto);
    this.producto.nombre ='';
    this.producto.descripcion ='';
    this.producto.categoria ='';
    this.producto.precio =0;
    this.producto.stock =0;
    this.producto.fabricante ='';
    this.producto.img1=null;
    this.producto.img2=null;
    this.producto.img3=null;
  }

}
