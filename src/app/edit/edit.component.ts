import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../register.model';
import { AdmintableService } from '../services/admintable.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  register: Register;
  banks:string[];
  constructor(private service: AdmintableService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { 
    this.banks=['HDFC','Kotak','ICICI','SBI'];
    this.register = new Register();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        //this.emp = this.service.findByIndex(params['index']);
        this.service.findByUname(params['uname']).subscribe(data => this.register = data);
      });
  }
  updatePerson()
  {
    this.service.update(this.register);
    this.router.navigate(['adminpanel']);
  }
}
