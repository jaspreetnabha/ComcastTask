import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { GetDataService } from './shared/services/get-data.service'
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

const appRoutes: Routes = [
  { path: 'showdetails', component: ShowDetailsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
