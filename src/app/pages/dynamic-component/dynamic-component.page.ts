import { Component, OnInit } from '@angular/core';
import { FireAnalyticsService } from 'src/app/services/fire-analytics/fire-analytics.service';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.page.html',
  styleUrls: ['./dynamic-component.page.scss'],
})
export class DynamicComponentPage implements OnInit {

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

}
