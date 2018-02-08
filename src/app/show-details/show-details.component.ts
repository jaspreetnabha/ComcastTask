import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import{ Item,GetDataService} from '../shared/services/get-data.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private getDataService: GetDataService) { }
  
  Items:Item [];
  
  ngOnInit() {
    this.showData();
  }
  
  showData() {
  this.getDataService.getData()
    .subscribe(data =>  {
        console.log(data);
        this.Items = <any>data;
      });
  }
}
