import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login.model';
import { Register } from '../register.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string = "http://localhost:8080/backend/rest";
 
  constructor(private router: Router, private http: HttpClient) { }

  login(login : Login) : Promise<Register> {
    console.log(login.uname);
    const params = new HttpParams().append('uname', login.uname)
          .append('password', login.password);
    let result = this.http.get<Register>(this.baseUrl+"/login", {params : params}).toPromise();
    return result;
  }

}
