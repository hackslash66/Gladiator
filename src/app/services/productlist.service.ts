import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import * as data from '../../assets/product.json';
@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  pro:Product;
  productList:any=(data as any).default;
  constructor() { }
 

  getProductList():Product[]{
    return this.productList;
  }
  
  showproduct(p:Product){
       this.pro=p;
       return p;
  }
  showpro(){
    return this.pro;
  }
}
