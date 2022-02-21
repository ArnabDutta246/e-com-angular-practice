import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PageData } from 'src/app/interface/interface';
import { DbService } from 'src/app/services/db/db.service';
import { FireAnalyticsService } from 'src/app/services/fire-analytics/fire-analytics.service';

@Component({
  selector: 'app-page-one-edit',
  templateUrl: './page-one-edit.page.html',
  styleUrls: ['./page-one-edit.page.scss'],
})
export class PageOneEditPage implements OnInit {
  data: SafeHtml;
  code:string;
  pageData:PageData;
  codeOne = '';
  codeTwo = '';
  date = new Date();
  constructor(private db:DbService,private activatedRoute: ActivatedRoute,private sanitizer: DomSanitizer, private fireAna:FireAnalyticsService) {
    this.codeOne = '<div class="card" style="width: 312px;height: auto;background-color: aliceblue;border-radius: 6px;padding: 10px;box-shadow: 0px 3px 7px 0px grey;margin: 30px;"><p>{{date|date:"medium"}}</p><h3 style="color:blueviolet">Comple Design Code</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quod.</p><br><b>-- By A. Dutta</b><br> <br><small> Consectetur adipisicing elit. Voluptatum officiis corporis illum. Quibusdam dolore esse autem nobis exercitationem recusandae hic!</small></div>';
    this.codeTwo = '<div class="card" style="width: 312px;height: auto;background-color: aliceblue;border-radius: 6px;padding: 10px;box-shadow: 0px 3px 7px 0px grey;margin: 30px;"><p>{{date|date:"mediumDate"}}</p><img style="height:230px" src="https://media.istockphoto.com/photos/clouds-on-sky-picture-id184103864?b=1&k=20&m=184103864&s=612x612&w=0&h=VscWCctRLYK1uh-XIuI-FbqfyTWjfyK04aWUV5aiqVQ=" alt=""><h3 style="color:blueviolet">Comple Design Code</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quod.</p><br><b>-- By A. Dutta</b><br> <br><small> Consectetur adipisicing elit. Voluptatum officiis corporis illum. Quibusdam dolore esse autem nobis exercitationem recusandae hic!</small></div>';

   }

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
    //========= [ calling fireAna ] =================
    this.fireAna.initFb();
    this.setUser();
    this.setProperty();
    this.logEvent();
  }



  submitHtmlCode(){
    console.log("getting code ",this.code);
    this.pageData.template = this.code;
    this.db.modifyPageData(this.pageData,{template:this.pageData.template})
  }


  //========= [ firebase analytics ] ==============
  setUser() {
    this.fireAna.setUser();
   }
  
   setProperty() {
     this.fireAna.setProperty();
   }
  
   logEvent() {
     this.fireAna.logEvent('home_Page','home page visit');
   }
}
