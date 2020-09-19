import { Injectable } from '@angular/core';
import { RegisterModel } from '../register.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList : RegisterModel[] = [];
  result:RegisterModel;
  constructor(private router: Router) { }
    saveUser(user:RegisterModel)
    {
      this.userList.push(user);
    }

    setUser(uname:String,password:String)
    {
      this.result = this.userList.find(x => x.uname == uname&& x.psw==password);
    }

    getUser():RegisterModel{
      return this.result;
    }
}
