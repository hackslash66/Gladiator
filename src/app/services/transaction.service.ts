import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../order.model';
import { Transaction } from '../transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl: string = "http://localhost:8080/backend/rest";

  constructor(private http: HttpClient) { }

  getOrders(trans:Transaction) {
    const params = new HttpParams().append('orderID', trans.orderID);
    console.log(trans.orderID);
    return this.http.get<Transaction[]>(this.baseUrl+"/u_transactions", {params : params});
   }

   buynow(t:Transaction){
    console.log(t);
    this.http.post<any>(this.baseUrl + "/transaction",t).subscribe(data=>data=t);
  }

}
