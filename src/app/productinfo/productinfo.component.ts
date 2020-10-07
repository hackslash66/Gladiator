import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login.model';
import { Order } from '../order.model';
import { Product } from '../product.model';
import { Register } from '../register.model';
import { Emicard } from '../emicard.model';
import { EmicardService } from '../services/emicard.service';
import { ProductlistService } from '../services/productlist.service';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductinfoComponent implements OnInit {

  p:Product;
  login:Register;
 
  card= new Emicard;
  ord= new Order;
  emi:number[];
  emidetails:Emicard;
  myDate = new Date();
  jstoday='';
  constructor(private router:Router, private service: ProductlistService, private service2: EmicardService) {
    this.emi=[3,6,9,12];
    this.jstoday = formatDate(this.myDate, 'dd-MM-yyyy', 'en-US', '+0530');
    console.log(this.jstoday);
   }
  
  ngOnInit(): void {
    this.p=this.service.showpro();
    this.login = JSON.parse(localStorage.getItem('user'));
    //this.p.user.uname=this.login.uname;
    this.card.cardNo=this.login.account;
    this.service2.getCard(this.card).subscribe(data=>this.emidetails=data);
    //this.p.pId=10;
  }

  buynow() {
    if(this.ord.emiDuration==null){
      alert("Select EMI Duration!!");
    }
    else{
   this.ord.user=this.login;
    this.ord.product=this.p;
    this.ord.orderDate=this.jstoday;
    this.ord.monthsLeft=this.ord.emiDuration-1;
    this.ord.amountPaid=Math.round(this.p.prate/this.ord.emiDuration);
    this.ord.dueAmount=Math.round(this.ord.amountPaid * this.ord.monthsLeft);

    console.log(this.ord.amountPaid);
    console.log(this.ord);
    if(this.emidetails.balance-this.ord.amountPaid > 0){
    this.emidetails.balance=this.emidetails.balance-this.ord.amountPaid;
    this.service2.updatecard(this.emidetails);

    this.service.buynow(this.ord);
   // this.emidetails.balance=this.emidetails.balance-this.ord.amountPaid;
     //this.service2.updatecard(this.emidetails);
     console.log(this.emidetails);
      alert("product bought successfully");
      this.router.navigate(['dashboard']);
    }
    else{
      alert("You dont have enough money in your card!!");
    }
    }
}
}
