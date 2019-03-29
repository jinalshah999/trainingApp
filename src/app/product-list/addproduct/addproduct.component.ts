import { Component, OnInit } from '@angular/core';
import { ProductlistserviceService } from '../productlistservice.service';
import { Productmodel } from '../productmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private _Data:ProductlistserviceService,private _route:Router) { }

  ngOnInit() {
  }
  onAddProduct(){
    this._Data.addProduct(new Productmodel(106,'xyz',13234,'',4));
  }
  onBackClick(){
    this._route.navigate([''])
  }
}
