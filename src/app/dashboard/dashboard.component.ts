import { Component, OnInit } from '@angular/core';
import { Login } from '../login.model';
import { Register } from '../register.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  login:Register;
  constructor() { }

  ngOnInit(): void {
    this.login = JSON.parse(localStorage.getItem('user'));
    console.log(this.login);
  }

}
