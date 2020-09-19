import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from '../register.model';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: RegisterModel;
  constructor(private service: UserService,private router:Router) {
      
   }

  ngOnInit(): void {
    this.user=this.service.getUser();
  }

}
