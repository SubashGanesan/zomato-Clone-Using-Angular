import { Injectable } from '@angular/core';
import { AppComponent } from './app.component'
import { HttpHeaders,
  HttpParams,
  HttpClient
 } from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private httpClient: HttpClient) {   }
   getApi(){
    let head= new HttpHeaders({
      "user-key":"329b7eca44cd79e5a6c1763e5500097e",
      "content-Type":"application/json"
    });
    let param= new HttpParams();
    // let searchq=document.getElementById("search").value
    return this.httpClient.get("https://developers.zomato.com/api/v2.1/search?entity_id=7&entity_type=city&q=test&start=1&count=100",
     {
       headers:head,
       params:param
     })
      
  }
}