import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import value, * as data from '../../assets/product.json';
import { Login } from '../login.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../register/register.component';
import { Register } from '../register.model';
import { Order } from '../order.model';
@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  pro:Product;
  productList:any=(data as any).default;
  private baseUrl: string = "http://localhost:8080/backend/rest";
  constructor(private http: HttpClient) { }
 

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

  
  
  login:Register;
  prod:Product;
  
//   buynow(p:Product){
//     this.login = JSON.parse(localStorage.getItem('user'));
//     this.prod=p;
//     this.prod.user=this.login;
//     console.log(this.prod.user);
//     console.log(this.prod.user?.uname);
//     this.prod.user.uname=this.login.uname;
//     //this.prod?.user?.uname="yashwanth";
//     console.log(this.prod);
//     this.http.post<any>(this.baseUrl + "/order",p).subscribe(data=>data=this.prod);
    
// }
buynow(o:Order){
  console.log(o);
  this.http.post<any>(this.baseUrl + "/order",o).subscribe(data=>data=o);
}

}
