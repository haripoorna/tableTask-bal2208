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
  totalMarks: Number = 0;
  ngOnInit() {
    this.userSearch();
  }

  userSearch(){
    this.tableService.userSearch().subscribe(data=>{
      this.userData  = data;
      this.checkStatus();
      let i = 0;
      while(i<=this.userData.length-1){
            for (var key in this.userData[i].marks) {
              this.totalMarks += this.totalMarks + this.userData[i].marks[key]
                console.log(this.totalMarks)
          }
        i++
      };
    })
  }
  checkStatus(){
    for(let i=0; i<=this.userData.length-1; i++){
      let marks = this.userData[i].marks;
          for (var key in this.userData[i].marks) {
            if (this.userData[i].marks.hasOwnProperty(key)) {    
                if(this.userData[i].marks[key]<20){
                  this.userData[i].status = "Failed";
                  break;
                }else{
                  this.userData[i].status = "Pass";
                }
            }
        }
    };
  }

}
