import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  page = 1;
  private BASE_URL:string = 'https://reqres.in/api/users?page=';


  constructor(
    private http: HttpClient
  ) { }

public getData(page: Number):any {
  return this.http.get(`${this.BASE_URL}${page}`);
}
}
