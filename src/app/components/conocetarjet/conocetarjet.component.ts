import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-conocetarjet',
  templateUrl: './conocetarjet.component.html',
  styleUrls: ['./conocetarjet.component.scss']
})
export class ConocetarjetComponent implements OnInit {
  @Input() nombre:string;
  @Input() info:string;
  
  constructor() {}

  ngOnInit(): void {
  }
  
}
