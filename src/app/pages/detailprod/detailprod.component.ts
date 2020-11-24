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
  cargando = false;
  prod: any;
  id: any;

  constructor(private router:Router, private route:ActivatedRoute, private crudp:CrudproductService) { 
    this.route.params.subscribe(params => (this.id = params['id']));
  }
  
  ngOnInit(): void {
    this.cargando = true;
    this.crudp.getProducto(this.id)
      .subscribe( resp => {
        this.cargando = false;
        this.prod = resp;
        console.log(this.prod);
      });
  }
  
}