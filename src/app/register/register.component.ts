import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Register} from '../register.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 register=new Register;
 
 banks:string[];
   constructor(private router:Router) { 
    this.banks=['HDFC','Kotak','ICICI','SBI'];
   }

  ngOnInit(): void {
  }
savePerson(){
  alert('Registered Successfully');
  this.router.navigate(['login']);
}
}
