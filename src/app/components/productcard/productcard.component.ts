import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {

  constructor() {

  }
  public nombre= "M&M";
  public categoria= "Chocolate";
  public precio= 2.50;
  ngOnInit(): void {

  }

}
