import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CrudproductService } from 'src/app/services/crudproduct.service';

@Component({
  selector: 'app-admieditproduct',
  templateUrl: './admieditproduct.component.html',
  styleUrls: ['./admieditproduct.component.scss']
})
export class AdmieditproductComponent implements OnInit {
  @Input() editProducto:Product={
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

  editar(producto){ 
    this.editProducto = producto;
  }

  aggProductEditado(){
    this.crudp.editarProducto(this.editProducto);
  }

}
