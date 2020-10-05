import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../order.model';
import { Register } from '../register.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl: string = "http://localhost:8080/backend/rest";
  constructor(private http: HttpClient) { }

  
   
   getList(login:Register) {
    const params = new HttpParams().append('username', login.uname);
    console.log(login.uname);
    return this.http.get<Order[]>(this.baseUrl+"/u_orders", {params : params});
   }

   ord:Order;
   showdetails(o:Order){
    this.ord=o;
    return o;
}
show(){
 return this.ord;
}
editorder(ord:Order){
  this.http.put(this.baseUrl + "/editorder",ord).subscribe(data => data = ord);
}
}
