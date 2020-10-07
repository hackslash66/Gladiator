import { Component, OnInit } from '@angular/core';
import { Login } from '../login.model';
import { Register } from '../register.model';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  login : Login;
  user : Register;

  register=new Register;

  constructor() { }

  ngOnInit(): void {
  }
  
  forgot(){
    
  }
}
