import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import{ Item,GetDataService} from '../shared/services/get-data.service';
import{ UtilityService} from '../shared/services/utility.service';

@Component({
  selector: 'app-transform-data',
  templateUrl: './transform-data.component.html',
  styleUrls: ['./transform-data.component.css']
})
export class TransformDataComponent implements OnInit {
  constructor(private getDataService: GetDataService, private utilityService: UtilityService) { }
  
  Items:Item [];
  order: number = 1;
  column:string="";

  ngOnInit() {
    this.showData();
  }

  sort(column){
    this.utilityService.sort(column,this.Items,this.order);
    this.order = (this.order==1)?-1:1;
  }

  transformData(){
      let formattedObj = [];
      let reformattedArray = this.Items.map(obj =>{ 
      let rObj = [];
      //console.log(obj);
      let found;
      if(formattedObj.length>0){ 
          found = formattedObj.find(function(element) { 
              return element.name === obj.name; 
            });   
      }
      
      if(!found){ 
          rObj['name'] = obj.name;
          rObj[obj.category] = obj.amount; 
          formattedObj.push(rObj);
      }
      else{
        found[obj.category] = obj.amount; 
      }
      this.Items = formattedObj;
      return rObj;   
    })

  }

  showData() {
    this.getDataService.getData()
      .subscribe(data =>  {
          this.Items = <any>data;
          this.transformData();
      });
  }

}
