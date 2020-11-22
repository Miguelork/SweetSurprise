import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CrudproductService } from 'src/app/services/crudproduct.service';

@Component({
  selector: 'app-detailprod',
  templateUrl: './detailprod.component.html',
  styleUrls: ['./detailprod.component.scss']
})
export class DetailprodComponent implements OnInit {
  aux:any;
  prod:Product={
    nombre:'',
    descripcion:'',
    categoria:'',
    precio:0,
    stock:0,
    fabricante:'',
    img1:null,
    img2:null,
    img3:null,
  };
  id='';

  constructor(private router:Router, private route:ActivatedRoute, private crudp:CrudproductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.aux = this.crudp.getProducto('id');
    this.prod = this.aux;
    console.log(this.prod);
  }

}
