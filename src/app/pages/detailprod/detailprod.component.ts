import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CrudproductService } from 'src/app/services/crudproduct.service';
import { Favcharacters } from '../../models/FavCharacters';
import { DeseoService } from '../../services/Deseos.service';




@Component({
  selector: 'app-detailprod',
  templateUrl: './detailprod.component.html',
  styleUrls: ['./detailprod.component.scss']
})
export class DetailprodComponent implements OnInit {
  Product: Product[] = [];
  favoritos: Favcharacters ;
  cargando = false;
  prod: any;
  id: any;
  user: any;

  constructor(private router:Router, private route:ActivatedRoute, private crudp:CrudproductService, public deseo: DeseoService) { 
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

