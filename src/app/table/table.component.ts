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
  topper :any;
  ngOnInit() {
    this.userSearch();
  }

  userSearch(){
    this.tableService.userSearch().subscribe(data=>{
      this.userData  = data;
      this.calculateTotalMarks();
      this.checkStatus();
      this.setTopper();
    })
  };
 
  calculateTotalMarks(){
    let temp:any = [];
    temp = this.userData;
    let i = 0;
    console.log(temp)
    while(i<=temp.length-1){
        //   for (var key in this.userData[i].marks) {
        //     this.totalMarks += this.totalMarks + this.userData[i].marks[key]
        //       console.log(this.totalMarks)
        // }
        if(temp[i].name == this.userData[i].name){
          let totalMarks:any = 0
          for (var key in temp[i].marks) {
             totalMarks = totalMarks + temp[i].marks[key];
          }
          this.userData[i].totalMarks = totalMarks;
        }
      i++
    };
  };
  
  checkStatus(){
    for(let i=0; i<=this.userData.length-1; i++){
      let marks = this.userData[i].marks;
          for (var key in this.userData[i].marks) {
            if (this.userData[i].marks.hasOwnProperty(key)) {    
                if(this.userData[i].marks[key]<20){
                  this.userData[i].status = "Failed";
                  break;
                }
                else{
                  this.userData[i].status = "Pass";
                }
            }
        }
    };
  }
  setTopper(){  
    this.topper = this.userData.reduce((min, p) => p.totalMarks > min ? p.totalMarks : min, this.userData[0].totalMarks);
    this.userData.forEach(element => {
      if(element.totalMarks == this.topper){
        element.status = "Topper";
      }
    });
  }
}
