import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterModel} from '../register.model';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 register=new RegisterModel;
 
 banks:string[];
   constructor(private service: UserService, private router: Router) { 
    this.banks=['HDFC','Kotak','ICICI','SBI'];
   }

  ngOnInit(): void {
  }
savePerson(){
  alert('Registered Successfully');
  this.service.saveUser(this.register);
  this.router.navigate(['login']);
}
}
