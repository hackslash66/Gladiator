import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../register.model';
import { AdmintableService } from '../services/admintable.service';

@Component({
  selector: 'app-adminacceptance',
  templateUrl: './adminacceptance.component.html',
  styleUrls: ['./adminacceptance.component.scss']
})
export class AdminacceptanceComponent implements OnInit {
  p:Register;
  constructor(private router:Router, private service: AdmintableService) { }

  ngOnInit(): void {
    this.p=this.service.show();
  }

}
