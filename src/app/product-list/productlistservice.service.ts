import { Injectable } from '@angular/core';
import { Productmodel } from './productmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductlistserviceService {
  cart:Productmodel[]=[];
products:Productmodel[]=[
  new Productmodel(1, 'omega', 100000, 'http://cdn2.jomashop.com/media/catalog/product/o/m/omega-seamaster-planet-ocean-black-dial-men_s-watch-232.30.42.21.01.001_1.jpg', 5),
  new Productmodel(2, 'timex', 2000, 'http://ecx.images-amazon.com/images/I/51Ezfl22mYL._AC_UL260_SR200,260_.jpg', 10),
  new Productmodel(3, 'titan', 12000, 'http://ecx.images-amazon.com/images/I/51fnWFY3s3L._AC_UL260_SR200,260_.jpg', 15),
  new Productmodel(4, 'fossil', 18000, 'http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/ZN8AAOSwd4tT5KNF/$_32.JPG', 8),
  new Productmodel(5, 'rolex', 125000, 'http://dvciknd2kslsk.cloudfront.net/images/watchfinderimages/Watch/Rolex/GMT-Master-II/76399-2005568029.jpg', 3)
];
  constructor() { }

  getAllProduct():Productmodel[]{
    return this.products;
  }
  addProduct(item:Productmodel){
    this.products.push(item);
  }
  deleteProduct(item:Productmodel){
    this.products.splice(this.products.indexOf(item),1);
  }
  addCart(item:Productmodel){
    this.cart.push(item);
  }
  viewCart(){
    return this.cart;
  }
}
