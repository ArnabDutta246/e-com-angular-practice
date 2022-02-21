import { Component, OnInit } from '@angular/core';
import { FireAnalyticsService } from 'src/app/services/fire-analytics/fire-analytics.service';

@Component({
  selector: 'app-componets-test',
  templateUrl: './componets-test.page.html',
  styleUrls: ['./componets-test.page.scss'],
})
export class ComponetsTestPage implements OnInit {

  constructor(private fireAna:FireAnalyticsService) { }

  ngOnInit() {
  //========= [ calling fireAna ] =================
  this.setUser();
  this.setProperty();
  this.logEvent();
}
  //========= [ firebase analytics ] ==============
  setUser() {
    this.fireAna.setUser();
   }
  
   setProperty() {
     this.fireAna.setProperty();
   }
  
   logEvent() {
     this.fireAna.logEvent('component_page','component page visit');
   }

  segmentChanged(e){
    console.log('segment choose',e.taget.value);
  }

}
