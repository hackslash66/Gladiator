import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from '../register.model';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user=new RegisterModel;
  uname:String;
  psw:String;
  constructor(private service: UserService,private router:Router) { }

  ngOnInit(): void {
  }
loginPerson(){
  if(this.uname=="Admin" && this.psw=="Admin@123"){
    this.router.navigate(['adminpanel']);
  }
  else{
    this.service.setUser(this.uname,this.psw);
    this.router.navigate(['dashboard']);
  }
}
}
