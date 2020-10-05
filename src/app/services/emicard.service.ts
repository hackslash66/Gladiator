import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emicard } from '../emicard.model';

@Injectable({
  providedIn: 'root'
})
export class EmicardService {
  private baseUrl: string = "http://localhost:8080/backend/rest";
  constructor(private http: HttpClient) { }

  getCard(card:Emicard) {
    const params = new HttpParams().append('cardNo', card.cardNo);
    console.log(card.cardNo);
    return this.http.get<Emicard>(this.baseUrl+"/listemidetails", {params : params});
   }

   goCard(card:Emicard){
    console.log(card);
    this.http.post<any>(this.baseUrl + "/emicard",card).subscribe(data=>data=card);
  }

  updatecard(card:Emicard){
    
    this.http.put(this.baseUrl + "/editemicard",card).subscribe(data => data = card);
  }
}
