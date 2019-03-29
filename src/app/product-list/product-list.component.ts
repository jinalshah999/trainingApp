import { Component, OnInit } from '@angular/core';
import { Productmodel } from './productmodel';
import { ProductlistserviceService } from './productlistservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:Productmodel[]=[];
  constructor(private _Data:ProductlistserviceService,private _route:Router) { }

  ngOnInit() {
   this.products= this._Data.getAllProduct();
  }
  onDeleteClick(item){
  this._Data.deleteProduct(item);
  }
  onAdd(){
    this._route.navigate(['/addProduct']);
  }
  onClick(item){
    this._Data.addCart(item);
  }
}
