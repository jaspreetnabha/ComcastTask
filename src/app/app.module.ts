import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { GetDataService } from './shared/services/get-data.service'
import { HttpClientModule } from '@angular/common/http'; 
import { UtilityService} from './shared/services/utility.service';

import { AppComponent } from './app.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { TransformDataComponent } from './transform-data/transform-data.component';

const appRoutes: Routes = [
  { path: 'showdetails', component: ShowDetailsComponent },
  { path: 'transformData', component: TransformDataComponent }
];

@Pipe({
  name : "default"
})
class DefaultPipe  {
  transform(value:string,fallback:string) {
    let colValue = '';
    if(value){
      colValue = value;
    }else{
      colValue = fallback;
    }
    return colValue ; 
  }
}


@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent,
    TransformDataComponent,
    DefaultPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetDataService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
