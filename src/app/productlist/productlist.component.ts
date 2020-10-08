import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { Order } from '../order.model';
import {ProductlistService} from '../services/productlist.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  math:Math;
  list:Product[]=[];
  constructor(private router:Router, private service: ProductlistService) { }

  ngOnInit(): void {
    this.service.getProductList().subscribe(data => this.list = data);
  }
 
  show(p:Product){
    this.router.navigate(['productinfo']);
    this.service.showproduct(p);
    
  }

}
