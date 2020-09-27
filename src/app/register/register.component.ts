import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Register} from '../register.model';
import { AdmintableService } from '../services/admintable.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 register=new Register;
 
 banks:string[];
   constructor(private router:Router,private service: AdmintableService) { 
    this.banks=['HDFC','Kotak','ICICI','SBI'];
   }

  ngOnInit(): void {
  }
savePerson(){
  this.service.saveperson(this.register);
  alert('Registered Successfully');
  this.router.navigate(['login']);
}
}
