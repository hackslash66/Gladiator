import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../register.model';
import {AdmintableService} from '../services/admintable.service';
@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {
  list:Register[]=[];
  
  constructor(private router:Router, private service: AdmintableService) { }

  ngOnInit() {
    //this.list = this.service.getList();
    this.service.getList().subscribe(data => this.list = data);
  }
  delete(index:number){
    // var ans=confirm("Are you sure, you want to delete?");
    // if(ans){
    //   this.service.deleteperson(index);
    // }
  }
  show(p:Register){
    this.router.navigate(['adminaccept']);
    this.service.showperson(p);
    
  }
  editEmp(uname : string)
  {
    this.service.edit(uname);
  }

  status(per:Register){
    per.status="accepted";
    this.service.updatestatus(per);
  }
}
