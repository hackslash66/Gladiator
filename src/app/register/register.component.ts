import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emicard } from '../emicard.model';
import {Register} from '../register.model';
import { AdmintableService } from '../services/admintable.service';
import { EmicardService } from '../services/emicard.service';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 register=new Register;
 card=new Emicard;
 banks:string[];
 myDate = new Date();
 exDate = new Date(this.myDate.getFullYear()+4,this.myDate.getMonth(),this.myDate.getDate())
 jstoday=''
 jexpiry=''
   constructor(private router:Router,private service: AdmintableService,private service2: EmicardService) { 
    this.banks=['HDFC','Kotak','ICICI','SBI'];
    this.jstoday = formatDate(this.myDate, 'MM-yyyy', 'en-US', '+0530');
    this.jexpiry = formatDate(this.exDate, 'MM-yyyy', 'en-US', '+0530' )
    console.log(this.jstoday);
    console.log(this.jexpiry);
   }

  ngOnInit(): void {
  }
savePerson(){
  if(this.register.password===this.register.cpassword){
  this.card.user=this.register;
  this.card.issueDate=this.jstoday;
  this.card.expiryDate=this.jexpiry;
  if(this.register.card=="Gold"){
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
