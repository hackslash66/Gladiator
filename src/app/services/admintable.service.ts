import { Injectable } from '@angular/core';
import * as data from '../../assets/finance.json';
import { Register } from '../register.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../order.model';
@Injectable({
  providedIn: 'root'
})
export class AdmintableService {
  private baseUrl: string = "http://localhost:8080/backend/rest";
  per:Register;
  //personList:any=(data as any).default;
  constructor(private router: Router, private http: HttpClient) { }
  saveperson(p:Register){
    this.http.post(this.baseUrl + "/add",p).subscribe(data => data = p);
  }

  getList(){
    return this.http.get<Register[]>(this.baseUrl+"/list");
  }
  // deleteperson(index:number){
  //   return this.personList.splice(index,1);
  // }
  showperson(p:Register){
       this.per=p;
       return p;
  }
  show(){
    return this.per;
  }
  edit(uname: string)
   {
     this.router.navigate(['edit'],{queryParams: {uname: uname}});
   }
   edit2(uname: string)
   {
     this.router.navigate(['editforuser'],{queryParams: {uname: uname}});
   }
  update(emp: Register)
  {
   this.http.put(this.baseUrl + "/edit",emp).subscribe(data => data = emp);
  }
  findByUname(uname:string): Observable<Register>
    {
     return this.http.get<Register>(this.baseUrl+"/fetch/"+uname);
    }
    updatestatus(p:Register){
    
      this.http.put(this.baseUrl + "/edit",p).subscribe(data => data = p);
    }

    
}
