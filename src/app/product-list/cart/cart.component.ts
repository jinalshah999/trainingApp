import { Component, OnInit } from '@angular/core';
import { Productmodel } from '../productmodel';
import { ProductlistserviceService } from '../productlistservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  arr:Productmodel[]=[];
  constructor(private _Data:ProductlistserviceService) { }

  ngOnInit() {

    this.arr=this._Data.viewCart();
  }

}
