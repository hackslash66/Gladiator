import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { Register } from '../register.model';
import { Transaction } from '../transaction.model';
import { TransactionService } from '../services/transaction.service';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {

  ord=new Order;
  trans= new Transaction;
  login:Register;
  list:Transaction[]=[];
  orderlist:Order[]=[];
  constructor(private service: DashboardService, private service2: TransactionService, private router: Router) { 
    
    
  }
 
  ngOnInit(): void {
    this.ord=this.service.show();
    this.trans.orderID=this.ord.orderID;
    console.log(this.trans.orderID);
    //this.login = JSON.parse(localStorage.getItem('user'));
    //console.log(this.login);
    //this.service.getList(this.login).subscribe(data => this.orderlist = data);
    this.service2.getOrders(this.trans).subscribe(data => this.list = data);
  }
  
  myDate = new Date();
  jstoday='';
  rate:number;
  transaction= new Transaction;
  paynow(){
   
   this.jstoday = formatDate(this.myDate, 'dd-MM-yyyy', 'en-US', '+0530');
   this.ord.recentdate=this.jstoday;
   this.ord.monthsLeft=this.ord.monthsLeft-1;
   if(this.ord.monthsLeft<0){
     alert("Money Already paid");
     this.router.navigate(['dashboard']);
   }
   else{
   this.rate=this.ord.product.prate;
   console.log(this.rate);
   //this.ord.amountPaid=this.ord.emiDuration;
   this.ord.amountPaid=this.ord.amountPaid+ Math.round(this.rate/this.ord.emiDuration);
    this.ord.dueAmount=this.rate-this.ord.amountPaid;
    console.log(this.ord);
    this.service.editorder(this.ord);

   
    this.transaction.transactionDate=this.jstoday;
    this.transaction.orderID=this.ord.orderID;
    this.transaction.amountPaid= Math.round(this.rate/this.ord.emiDuration);
    console.log(this.transaction);
    this.service2.buynow(this.transaction);
    alert((this.ord.emiDuration-this.ord.monthsLeft) + " month EMI paid!!")
    this.router.navigate(['dashboard']);
   }
  }

}
