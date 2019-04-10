import { Component} from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpService } from '../service/http.service';



@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpService]
})

@Injectable({ providedIn: 'root' })

export class HomeComponent{
    userData = [];
    totalItem = [];
    page: number;


    constructor (private httpService: HttpService) {
      this.getServerData(1);
    }

    public getServerData(event){
      this.httpService.getData(event).subscribe(
        response => {
          if(response.error){
            alert('server error')
          } else {
            this.userData = response.data;
            console.log(response.data);
            this.totalItem = response.totalItem
          }
        }
      );
      return event
    }

}
