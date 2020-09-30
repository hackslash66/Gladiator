import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../register.model';
import {LoginService} from '../services/login.service' ;
import {Login} from '../login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login : Login;
  user : Register;

  register=new Register;
  constructor(private service :LoginService,private router:Router) { 
    this.login = new Login();
  }

  ngOnInit(): void {
    localStorage.setItem("user", null);

  }
// loginPerson(){
//   var uname=this.register.uname;
//   var pass=this.register.password;
//   if(uname=="admin" && pass=="Admin@123"){
//     this.router.navigate(['adminpanel']);
//   }
//   else{
//     this.router.navigate(['dashboard']);
//   }
// }


async loginPerson() {
  var uname=this.login.uname;
  var pass=this.login.password;
   if(uname=="admin" && pass=="Admin@123"){
      this.router.navigate(['adminpanel']);
    }
  else{
    await this.service.login(this.login).then(data => this.user = data);
  
    localStorage.setItem("user", JSON.stringify(this.user));
    localStorage.setItem("uname", this.user.name);
    this.router.navigate(['dashboard']);
  }
  
}

}
