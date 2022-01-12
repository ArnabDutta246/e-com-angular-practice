import { Injectable } from '@angular/core';
import {
  ActionSheetButton,
  ActionSheetController,
  AlertButton,
  AlertController,
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';


export interface AlertMessage {
  message: string;
  heading: string;
  mode: AlertMsgMode.Success | AlertMsgMode.Error | AlertMsgMode.Warning;
  callBackFun?: Function[];
}
export enum AlertMsgMode {
  Success = 'success-alert',
  Error = 'error-alert',
  Warning = 'warning-alert',
}
export enum AlertMsgIcon {
  SuccessIcon = 'checkmark-circle',
  ErrorIcon = 'close-circle',
  WarningIcon = 'information-circle',
}

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  loaderObj = new BehaviorSubject<any>({});
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    private loaderController: LoadingController,
    public actionSheetController: ActionSheetController,
    public modalController: ModalController
  ) {}

  msgtype_err = "error";
  msgtype_warning = "warning";
  msgtype_success = "success";

  async showErrorToast(err_msg) {
    const toast = await this.toastController.create({
      message: err_msg,
      cssClass: "custom_errMsg",
      duration: 2000,
      buttons: [
        {
          side: 'start',
          icon: 'close',
        }
      ]
    });
    toast.present();
  }
  
  /** ================ [ Loader controller ] ================== */
  activatedLoader(msg:string){
    this.loaderObj.next({showLoader:true,loaderMsg:msg})
  }
  dismissLoader(){
    this.loaderObj.next({showLoader:false,loaderMsg:""})
  }

  /**================  [ Alert controller]  ======================**/
  setButtonsWithCallBack(mode: String, callBack?: Function[],extraButtonText?:string): AlertButton[] {
    let alertButtons: AlertButton[] = [];
    switch (mode) {
      case AlertMsgMode.Success:
        alertButtons.push({
          text: 'Close',
          handler: () => {
            if (callBack.length) callBack[0]();
          },
        });
        break;
      case AlertMsgMode.Warning:
        alertButtons.push(
          {
            text: extraButtonText?extraButtonText:'Confirm',
            handler: () => {
              console.log('confirmed clicked', callBack);
              if (callBack.length) callBack[0]();
            },
          },
          {
            text: 'Cancel',
            handler: () => {
              console.log('cancel clicked');
              if (callBack.length > 1) callBack[1]();
            },
          }
        );
        break;
      default:
        alertButtons.push({
          text: 'Close',
          handler: () => {
            if (callBack.length) callBack[0]();
          },
        });
        break;
    }
    return alertButtons;
  }
  async presentAlertMsg(alertMsgObj: AlertMessage,extraButtonText?:string) {
    const iconWill =
      alertMsgObj.mode == AlertMsgMode.Success
        ? AlertMsgIcon.SuccessIcon
        : alertMsgObj.mode == AlertMsgMode.Error
        ? AlertMsgIcon.ErrorIcon
        : AlertMsgIcon.WarningIcon;
    const alert = await this.alertController.create({
      cssClass: alertMsgObj.mode,
      // header: 'Alert',
      subHeader: alertMsgObj.heading,
      message: `<ion-icon name=${iconWill}></ion-icon><br/>${alertMsgObj.message}`,
      buttons: [
        ...this.setButtonsWithCallBack(
          alertMsgObj.mode,
          alertMsgObj.callBackFun,
          extraButtonText
        ),
      ],
      keyboardClose: false,
      backdropDismiss: false,
      mode: 'md',
    });
    await alert.present();
  }
   /** Alert message simplifiy **/
   alertMessage(
    message: string,
    heading: string,
    mode: AlertMsgMode,
    callBackFun: Function[] = [],
    extraButtonText:string = null
  ) {
    this.presentAlertMsg({
      message: message,
      heading: heading,
      mode: mode,
      callBackFun: callBackFun,
    },extraButtonText);
  }
  /**================  [ Toaster controller]  ======================**/
  /**
   * <ion-icon name=${
        mode == 'success' ? AlertMsgIcon.SuccessIcon : AlertMsgIcon.ErrorIcon
      } class="toast-icon"></ion-icon>  
   */
  async presentToast(
    message: string,
    mode: 'success' | 'error',
    duration: number = 3500
  ) {
    const toast = await this.toastController.create({
      message: `${message}`,
      duration: duration,
      color: mode == 'error' ? 'danger' : 'success',
      position: 'top',
      keyboardClose: false,
      cssClass: 'toaster-class',
      mode: 'md',
      buttons: [
        {
          side: 'start',
          icon: 'close',
        }
      ]
    });
    toast.present();
  }

  async add(
    tag: string,
    message: string,
    mode: 'success' | 'error',
    duration: number = 3500
  ) {
    const toast = await this.toastController.create({
      message: `<ion-icon name=${
        mode == 'success' ? AlertMsgIcon.SuccessIcon : AlertMsgIcon.ErrorIcon
      } class="toast-icon"></ion-icon> ${tag}: ${message}`,
      duration: duration,
      color: mode == 'error' ? 'danger' : 'success',
      position: 'top',
      keyboardClose: false,
      cssClass: 'toaster-class',
      mode: 'md',
    });
    toast.present();
  }
  /**================  [ loader controller]  ======================**/
  isLoading: boolean = false;
  async showLoader(msg: string = 'loading...') {
    //await this.hideLoader(id);
   // this.isLoading = true;
    return this.loaderController
      .create({
        message: msg,
        mode: 'ios',
        cssClass: '',
        keyboardClose: false,
        backdropDismiss: false,
        spinner: 'bubbles',
        showBackdrop: true,
        // id:id,
      })
      .then((response) => {
        response.present();
        // if (!this.isLoading) {
        //   response.dismiss().then(() => console.log('abort presenting'));
        // }
      });
  }
  async hideLoader() {
    this.isLoading = false;
    while ((await this.loaderController.getTop()) !== undefined) {
      return this.loaderController.dismiss().then((res) =>{console.log("loader is hide return",res); return res;});
    }
  }
  /**================  [ action sheet controller]  ======================**/
  async presentActionSheet(buttons: ActionSheetButton[]) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: buttons,
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  //**================ [ catch error with hide loader ]============== */
  catchErrorWithDismissLoader(){
    this.dismissLoader();
    this.presentToast("Something went wrong!! please check again.","error");
  }

  //================== [ search modal upload ]===========================
  // modal:any;
  // async presentModal(title,list:any[],property:any[],searchProperty,component=SearchListPage) {
  //   this.modal = await this.modalController.create({
  //     component: component,
  //     cssClass: 'my-custom-class',
  //     swipeToClose: true,
  //     componentProps: {
  //       'title':title,
  //       'list': list,
  //       'propertyWantToShow': property,
  //       'searchProperty':searchProperty
  //     },
  //     presentingElement: await this.modalController.getTop()
  //   });


  //   return await this.modal.present();
  // }
  // data = {
  //   'title':title,
  //   'list': list,
  //   'propertyWantToShow': property,
  //   'searchProperty':searchProperty
  // }
  // async presentCartAndSearchModal(data,component) {
  //   this.modal = await this.modalController.create({
  //     component: component,
  //     cssClass: 'my-custom-class',
  //     swipeToClose: true,
  //     componentProps: {
  //       transferData : data
  //     },
  //     presentingElement: await this.modalController.getTop()
  //   });


  //   return await this.modal.present();
  //   ;
  // }

  // modalOnDismiss(){
  //   let modalDataReturn  = null;
  //   return this.modal.onDidDismiss().then((modelData) => {
  //     if (modelData !== null) {
  //       modalDataReturn = modelData.data.selectedData;
  //       console.log('Modal Data : ',modelData.data, modalDataReturn);
  //       return modalDataReturn;
  //     }
  //   });
  // }
}
