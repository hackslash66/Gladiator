import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emicard } from '../emicard.model';
import {Register} from '../register.model';
import { AdmintableService } from '../services/admintable.service';
import { EmicardService } from '../services/emicard.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 register=new Register;
 card=new Emicard;
 banks:string[];
   constructor(private router:Router,private service: AdmintableService,private service2: EmicardService) { 
    this.banks=['HDFC','Kotak','ICICI','SBI'];
   }

  ngOnInit(): void {
  }
savePerson(){
  if(this.register.password===this.register.cpassword){
  this.card.user=this.register;
  this.card.issueDate="02/20";
  this.card.expiryDate="04/24";
  if(this.register.card=="gold"){
    this.card.balance=200000;
  }
  else{
    this.card.balance=500000;
  }
  this.card.cardNo=this.register.account;
  this.service2.goCard(this.card);

  console.log(this.card);
  //this.service.saveperson(this.register);
  
  alert('Registered Successfully');
  this.router.navigate(['login']);
}
else{
  alert("Passwords not matched!!");
}
}
}
