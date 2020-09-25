import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import {ProductlistService} from '../services/productlist.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  list:Product[]=[];
  constructor(private router:Router, private service: ProductlistService) { }

  ngOnInit(): void {
    this.list=this.service.getProductList();
  }
 
  show(p:Product){
    this.router.navigate(['productinfo']);
    this.service.showproduct(p);
    
  }

}
