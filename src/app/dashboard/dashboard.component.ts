import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login.model';
import { Order } from '../order.model';
import { Register } from '../register.model';
import {DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  login:Register;
  list:Order[]=[];
  constructor(private router:Router,private service: DashboardService) { }
 
  ngOnInit(): void {
    
    this.login = JSON.parse(localStorage.getItem('user'));
    //console.log(this.login);
    this.service.getList(this.login).subscribe(data => this.list = data);
  }
  show(o:Order){
    this.router.navigate(['orderdetails']);
    this.service.showdetails(o);
    
  }
}
