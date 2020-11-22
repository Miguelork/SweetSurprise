import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-carruseldetail',
  templateUrl: './carruseldetail.component.html',
  styleUrls: ['./carruseldetail.component.scss']
})
export class CarruseldetailComponent implements OnInit {

  @Input() pict1=null;
  @Input() pict2=null;
  @Input() pict3=null;

  constructor() { }

  ngOnInit(): void {
  }

}
