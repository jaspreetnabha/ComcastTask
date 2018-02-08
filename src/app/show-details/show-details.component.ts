import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import{ Item,GetDataService} from '../shared/services/get-data.service';
import{ UtilityService} from '../shared/services/utility.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private getDataService: GetDataService, private utilityService: UtilityService) { }
  
  Items:Item [];
  order: number = 1;
  column:string="";

  ngOnInit() {
    this.showData();
  }
  
  sort(column){
    this.utilityService.sort(column,this.Items,this.order);
    //debugger;
    this.order = (this.order==1)?-1:1;
    this.column=column;
  }
  

showData() {
  this.getDataService.getData()
    .subscribe(data =>  {
        console.log(data);
        this.Items = <any>data;
      });
  }
}
