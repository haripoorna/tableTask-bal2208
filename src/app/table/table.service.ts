import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http, Response, RequestMethod, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class TableService  {
  baseUrl: string;
  userDetails: any;
  token: string;
  url :any;
  constructor(private http: HttpClient) {
  }
  

  userSearch(): Observable<any>{
    // this.url = "assets/json/data.json";
    return this.http.get('assets/json/data.json');
  }
}