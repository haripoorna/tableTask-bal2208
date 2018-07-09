import { Component, OnInit } from '@angular/core';
import {TableService} from './table.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private tableService: TableService) { }
  userData : any;
  ngOnInit() {
    this.userSearch();
  }

  userSearch(){
    this.tableService.userSearch().subscribe(data=>{
      console.log(data);
      this.userData  = data;
      this.userData.forEach(function(element) {
        if(element.marks){
            for (var key in element.marks) {
              if (element.marks.hasOwnProperty(key)) {
                console.log(element.marks[key]);
                  if(element.marks[key]<20){
                      element.status = "failed";
                  }else{
                    element.status = "pass"
                  }
              }
          }
        }
      });
    })
  }


}
