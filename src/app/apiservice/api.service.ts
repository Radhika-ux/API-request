import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) {

   }
   getUserData(){

    let url= environment.apiDomain + 'api/users?page=2';
    return this.httpclient.get(url);
  }

}
