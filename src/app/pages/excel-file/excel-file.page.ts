import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel/excel.service';

@Component({
  selector: 'app-excel-file',
  templateUrl: './excel-file.page.html',
  styleUrls: ['./excel-file.page.scss'],
})
export class ExcelFilePage implements OnInit {

  constructor(private excelServ:ExcelService) { }

  ngOnInit() {
  }

}
