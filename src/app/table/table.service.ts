import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class TableService  {
  baseUrl: string;
  userDetails: any;
  token: string;
  url :any;
  constructor(private http: Http) {
  }
  

  userSearch(){
    this.url = "../assets/data.json";
    return this.http.get(this.url);
  }
}