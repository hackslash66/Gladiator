import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../register.model';
import { AdmintableService } from '../services/admintable.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  password:string;
  cpassword:string;
  login= new Register;
  constructor(private service: AdmintableService,  private router: Router) { }

  ngOnInit(): void {
    this.login = JSON.parse(localStorage.getItem('user'));
    console.log(this.login);
  }
 changepassword(){
   if(this.password==this.cpassword){
   this.login.password=this.password;
   this.service.update(this.login);
   alert("password updated successfully");
   this.router.navigate(['login']);
   }
   else{
    alert("passwords didn't match");
   }
 }
}
