import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Forgot } from '../forgot.model';
import { Login } from '../login.model';
import { Register } from '../register.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  login : Forgot;
  user : Register;

  register=new Register;

  constructor(private service :LoginService,private router:Router) { 
    this.login = new Forgot();
  }

  ngOnInit(): void {
    localStorage.setItem("user", null);
  }
  
   async forgot(){
    await this.service.forgotpassword(this.login).then(data => this.user = data);
  
    localStorage.setItem("user", JSON.stringify(this.user));
    localStorage.setItem("uname", this.user.name);
    this.router.navigate(['changepassword']);
  }
}
