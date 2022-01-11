import { Component, OnInit } from '@angular/core';
import { PushNotification, PushNotificationActionPerformed, PushNotifications, PushNotificationToken } from '@capacitor/push-notifications';

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.page.html',
  styleUrls: ['./push-notification.page.scss'],
})
export class PushNotificationPage implements OnInit {
  token:any;
  constructor() { }

  ngOnInit() {
    //========== push notification permission ===============
    PushNotifications.requestPermissions().then((result)=>{
      if(result.receive == 'granted'){
        PushNotifications.register();
      }
    });
    //========== listener of register =======================
    PushNotifications.addListener('registration',(token:PushNotificationToken)=>{
      this.token = token.value;
    })
    //========= Notification listener ======================
    PushNotifications.addListener('pushNotificationReceived',(notification:PushNotification)=>{
      alert("Notification received"+ JSON.stringify(notification));
    });
    //========= Notification performed ======================
    PushNotifications.addListener('pushNotificationActionPerformed',(notification:PushNotificationActionPerformed)=>{
      alert("Notification clicked when app close"+ JSON.stringify(notification));
    })
  }

}
