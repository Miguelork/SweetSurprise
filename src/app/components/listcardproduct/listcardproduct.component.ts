import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CrudproductService } from 'src/app/services/crudproduct.service';

@Component({
  selector: 'app-listcardproduct',
  templateUrl: './listcardproduct.component.html',
  styleUrls: ['./listcardproduct.component.scss']
})
export class ListcardproductComponent implements OnInit {

  @Input() productos:Product[];
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
    cantidad:1
  }

  constructor(private router:Router) {
    
  }

  ngOnInit(): void {
  }

  almacename(producto){
    this.product = producto;
  }
  verDetalles(producto){
    let m=producto.id;
    console.log(m);
    this.router.navigate(['/detalle',m]);
  }

}
