import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emicard } from '../emicard.model';
import { Login } from '../login.model';
import { Order } from '../order.model';
import { Register } from '../register.model';
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
  emidetails:Emicard;
  constructor(private router:Router,private service: DashboardService, private service2: EmicardService) { }
 
  ngOnInit(): void {
    
    this.login = JSON.parse(localStorage.getItem('user'));
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
}
