import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
// import { Plugins } from "@capacitor/core";
// const { FirebaseAnalytics, Device } = Plugins;
 
// Init for the web
import "@capacitor-community/firebase-analytics";
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';
import { environment } from 'src/environments/environment.prod';

// default
// import { getAnalytics } from "firebase/analytics";
// const analytics = getAnalytics();

@Injectable({
  providedIn: 'root'
})
export class FireAnalyticsService {

  analyticsEnabled = true;
 
  constructor( private router: Router) {
    this.initFb();
    this.router.events.pipe(
      filter((e: RouterEvent) => e instanceof NavigationEnd),
    ).subscribe((e: RouterEvent) => {
      console.log('route changed: ', e.url);
      this.setScreenName(e.url)
    });
    this.setUser()
  }
 
  async initFb() {
    // getAnalytics()
    console.log("firebase initializeFirebase");
    //if ((await Device.getInfo()).platform == 'web') {
    //  FirebaseAnalytics.initializeFirebase(environment.firebaseConfig);
    //}
  }
 
  setUser() {
    // Use Firebase Auth uid
    FirebaseAnalytics.setUserId({
      userId: "Arnab1234",
    }).then(res=>console.log("setuser "))
    .catch(err=>console.log("setuser ",err));
  }
 
  setProperty() {
    FirebaseAnalytics.setUserProperty({
      name: "framework",
      value: "angular",
    }).then(res=>console.log("setProperty "))
    .catch(err=>console.log("setProperty ",err));
  }
 
  logEvent(name?:string,method?:string) {
    FirebaseAnalytics.logEvent({
      name: name?name:"login",
      params: {
        method: method?method:"email"
      }
    }).then(res=>console.log("logEvent "))
    .catch(err=>console.log("logEvent ",err));;
  }
 
  setScreenName(screenName) {
    FirebaseAnalytics.setScreenName({
      screenName
    });
  }
 
  toggleAnalytics() {
    this.analyticsEnabled = !this.analyticsEnabled;
    FirebaseAnalytics.setCollectionEnabled({
      enabled: this.analyticsEnabled,
    });    
  }

}
