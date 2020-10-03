import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {

  ord:Order;
  constructor(private service: DashboardService) { }
 
  ngOnInit(): void {
    this.ord=this.service.show();
  }

}
