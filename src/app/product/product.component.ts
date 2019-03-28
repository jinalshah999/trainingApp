import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ProductModel } from './productClass';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,AfterViewInit {
str:string="watch";
  @ViewChild('demo') x:ElementRef;
  arrProduct:ProductModel[]=[
    new ProductModel(101,"abc",1000,5),
    new ProductModel(102,"def",2000,0)
  ];
  date1:number=Date.now();
  constructor() { }
  onDemo(str:string){

    this.arrProduct=this.arrProduct.filter(x=>x.pro_name.startsWith(str));
  }
  onClick(){
    console.log(this.x.nativeElement.value);
  }
  ngAfterViewInit(){
    this.x.nativeElement.value="jinal shah";
    console.log(" inside after view init "+this.x.nativeElement);
  }
  ngOnInit() {
    console.log(" inside ngoninit "+this.x.nativeElement.value);
  }
  onAddProduct(pro_id,pro_name,pro_price,pro_soh)
  {
    this.arrProduct.push(new ProductModel(pro_id,pro_name,pro_price,pro_soh));
  }
  onDelete(item){
    this.arrProduct.splice(this.arrProduct.indexOf(item),1)
  }

}
