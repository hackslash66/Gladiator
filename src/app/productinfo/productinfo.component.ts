import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login.model';
import { Order } from '../order.model';
import { Product } from '../product.model';
import { Register } from '../register.model';
import { ProductlistService } from '../services/productlist.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductinfoComponent implements OnInit {

  p:Product;
  login:Register;
  ord= new Order;
  emi:string[];
  myDate = new Date();
  jstoday='';
  constructor(private router:Router, private service: ProductlistService) {
    this.emi=['3','6','9','12'];
    this.jstoday = formatDate(this.myDate, 'dd-MM-yyyy', 'en-US', '+0530');
    console.log(this.jstoday);
   }
  
  ngOnInit(): void {
    this.p=this.service.showpro();
    this.login = JSON.parse(localStorage.getItem('user'));
    //this.p.user.uname=this.login.uname;
    
    //this.p.pId=10;
  }

  buynow() {
   this.ord.user=this.login;
    this.ord.product=this.p;
    this.ord.productname=this.p.pname;
    this.ord.producturl=this.p.purl;
    this.ord.orderDate=this.jstoday;
    this.ord.amountPaid=this.p.prate;
    console.log(this.ord.amountPaid);
    console.log(this.ord);
    this.service.buynow(this.ord);
     
      alert("product bought successfully");
      //this.router.navigate(['dashboard']);
  
}
}
