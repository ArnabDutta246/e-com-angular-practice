import { Component, OnInit } from '@angular/core';
import { FireAnalyticsService } from 'src/app/services/fire-analytics/fire-analytics.service';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.page.html',
  styleUrls: ['./directive-test.page.scss'],
})
export class DirectiveTestPage implements OnInit {
  color ='green';
  condition = false;
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
