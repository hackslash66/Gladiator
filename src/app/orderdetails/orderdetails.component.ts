import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { Register } from '../register.model';
import { Transaction } from '../transaction.model';
import { TransactionService } from '../services/transaction.service';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';
import { Emicard } from '../emicard.model';
import { EmicardService } from '../services/emicard.service';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {

  ord=new Order;
  trans= new Transaction;
  card= new Emicard;
  emidetails:Emicard;
  login:Register;
  list:Transaction[]=[];
  orderlist:Order[]=[];
  constructor(private service: DashboardService, private service2: TransactionService, private router: Router,private service3: EmicardService) { 
    
    
  }
 
  ngOnInit(): void {
    this.ord=this.service.show();
    this.trans.orderID=this.ord.orderID;
    console.log(this.trans.orderID);
    this.login = JSON.parse(localStorage.getItem('user'));
    //this.p.user.uname=this.login.uname;
    this.card.cardNo=this.login.account;
    this.service3.getCard(this.card).subscribe(data=>this.emidetails=data);
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
    if(this.emidetails.balance-Math.round(this.rate/this.ord.emiDuration) > 0){

    
    this.service.editorder(this.ord);
    
    this.emidetails.balance=this.emidetails.balance-Math.round(this.rate/this.ord.emiDuration);
    this.service3.updatecard(this.emidetails);
   
    this.transaction.transactionDate=this.jstoday;
    this.transaction.orderID=this.ord.orderID;
    this.transaction.amountPaid= Math.round(this.rate/this.ord.emiDuration);
    console.log(this.transaction);
    this.service2.buynow(this.transaction);
    alert((this.ord.emiDuration-this.ord.monthsLeft) + " month EMI paid!!")
    this.router.navigate(['dashboard']);

    }
    else{
      alert("You dont have enough money in your card!!");
    }
   }
  }

  // captureScreen(){
  //   var data=document.getElementById('maindiv');
  //   html2canvas(data).then(canvas=>{
  //    var imgWidth=208;
  //    var pageHeight=295;
  //    var imgHeight=canvas.height*imgWidth/canvas.width;
  //    var height=canvas.height*imgWidth/canvas.width;
  //    const contentDataURL=canvas.toDataURL('image/png')
  //    let pdf=new jsPDF('p','mm','a4');
  //    var position=0;
  //    pdf.addImage(contentDataURL,'PNG',0,position,imgWidth,imgHeight);
  //    pdf.save('invoice.pdf');

  //   });
  // }

 
}
