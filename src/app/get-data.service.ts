import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

export interface Item {
  name: string;
  category: string;
  amount: string;
}

@Injectable()
export class GetDataService {

  constructor(private http: HttpClient) { }

  dataUrl = 'assets/data.json';

  getData() {
    return this.http.get<Item[]>(this.dataUrl)
  }
}
