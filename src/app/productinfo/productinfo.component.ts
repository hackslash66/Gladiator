import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductlistService } from '../services/productlist.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductinfoComponent implements OnInit {

  p:Product;
  constructor(private router:Router, private service: ProductlistService) { }

  ngOnInit(): void {
    this.p=this.service.showpro();
  }

}
