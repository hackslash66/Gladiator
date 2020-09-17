import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../register.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  register=new Register;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
loginPerson(){
  var uname=this.register.uname;
  var pass=this.register.password;
  if(uname=="Admin" && pass=="Admin@123"){
    this.router.navigate(['adminpanel']);
  }
  else{
    this.router.navigate(['dashboard']);
  }
}
}
