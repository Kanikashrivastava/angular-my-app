import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable({ providedIn: 'root' })

export class HomeComponent implements OnInit{
    title = 'homepage';

    constructor (private http: HttpClient) {}

    ngOnInit (): void {
      this.getData();
    }
    userData:any = [];

    getData () {
      this.http.get('https://api.github.com/users')
      .subscribe((response) => {
        console.log(response);
        this.userData = response;
        })
    }

}
