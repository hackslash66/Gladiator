import { Component, OnInit } from '@angular/core';
import { Register } from './register.model';

@Component({
  selector: 'app-dashboardnavbar',
  templateUrl: './dashboardnavbar.component.html',
  styleUrls: ['./dashboardnavbar.component.scss']
})
export class DashboardnavbarComponent implements OnInit {

  constructor() { }
  login:Register;
  name:string;
  ngOnInit(): void {
    this.login = JSON.parse(localStorage.getItem('user'));
    this.name=this.login.name;
  }

}
