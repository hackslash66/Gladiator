import { IfStmt } from '@angular/compiler';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emicard } from '../emicard.model';
import { Login } from '../login.model';
import { Order } from '../order.model';
import { Register } from '../register.model';
import { AdmintableService } from '../services/admintable.service';
import {DashboardService} from '../services/dashboard.service';
import {EmicardService} from '../services/emicard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  login:Register;
  card= new Emicard;
  list:Order[]=[];
  allocated:number;
  emidetails:Emicard;
  constructor(private router:Router,private service: DashboardService, private service2: EmicardService,private service4:AdmintableService) { }
 
  ngOnInit(): void {
    
    this.login = JSON.parse(localStorage.getItem('user'));
     if(this.login.card=="gold"){
           this.allocated=200000;
     }
     else{
           this.allocated=500000;
     }
    //console.log(this.login);
    this.service.getList(this.login).subscribe(data => this.list = data);
    this.card.cardNo=this.login.account;
    this.service2.getCard(this.card).subscribe(data=>this.emidetails=data);
    console.log(this.emidetails);
  }
  show(o:Order){
    this.router.navigate(['orderdetails']);
    this.service.showdetails(o);
    
  }
  editEmp(){
    this.service4.edit2(this.login.uname);
  }
}
