import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent,
    TransformDataComponent
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
