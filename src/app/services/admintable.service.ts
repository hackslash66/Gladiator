import { Injectable } from '@angular/core';
import * as data from '../../assets/finance.json';
import { Register } from '../register.model';
@Injectable({
  providedIn: 'root'
})
export class AdmintableService {
  per:Register;
  personList:any=(data as any).default;
  constructor() { }
  saveperson(p:Register){
    this.personList.push(p);
  }

  getList():Register[]{
    return this.personList;
  }
  deleteperson(index:number){
    return this.personList.splice(index,1);
  }
  showperson(p:Register){
       this.per=p;
       return p;
  }
  show(){
    return this.per;
  }
}
