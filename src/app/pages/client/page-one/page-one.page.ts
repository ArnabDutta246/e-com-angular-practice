import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PageData } from 'src/app/interface/interface';
import { DbService } from 'src/app/services/db/db.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.page.html',
  styleUrls: ['./page-one.page.scss'],
})
export class PageOnePage implements OnInit {
  data: SafeHtml;
  code:string;
  pageData:PageData;
  codeOne = '';
  codeTwo = '';
  date = new Date();
  constructor(private db:DbService,private activatedRoute: ActivatedRoute,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (!window.DOMParser) return false;
    var parser = new DOMParser();
    this.db.getPagesData().subscribe((res:PageData[])=>{
      console.log(res);
      // this.data = parser.parseFromString(res[0].template, 'text/html');
      // this.data = res[0].template;
      this.pageData = res[0];
      this.code = res[0].template;
      this.data = this.sanitizer.bypassSecurityTrustHtml(res[0].template);
    })
  }
}
