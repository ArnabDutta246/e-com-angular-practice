import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel/excel.service';

@Component({
  selector: 'app-excel-file',
  templateUrl: './excel-file.page.html',
  styleUrls: ['./excel-file.page.scss'],
})
export class ExcelFilePage implements OnInit {
  data = {
    users:[
      {name:'Alex Kore',phone:"123456",depertment:"Hospitality"},
      {name:'Novace Dist',phone:"123456",depertment:"Management"},
      {name:'Nantole Kore',phone:"264573",depertment:"Transport"},
    ],
    depertments:[
      {name:'Hospitality',members:"1"},
      {name:'Management',members:"2"},
      {name:'Transport',members:"3"},
    ]
  }
  constructor(private excelServ:ExcelService) { }

  ngOnInit() {
  }
  exportExcel(){
    this.excelServ.downloadFile(this.data,'report.xlsx', 'xlsx')
  }



  // Rsources:
  // File Read
  // https://www.c-sharpcorner.com/article/xlsx-file-read-in-angular/
}
