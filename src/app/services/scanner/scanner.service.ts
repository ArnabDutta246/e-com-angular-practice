import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertMsgMode, CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  constructor(private common:CommonService) { }
  /** Prepare scanner */
  prepareScanner(){
    BarcodeScanner.prepare();
  }
  /** check permission */
  async checkPermission(){
    return new Promise(async (res,rej)=>{
      const status = await BarcodeScanner.checkPermission();
      if(status.granted){
       return res(true);
      }
      else if (status.denied) {
        this.common.alertMessage("Permission If you want to grant permission for using your camera, enable it in the app settings.","Permission",AlertMsgMode.Warning,[this.GoToAppSetting.bind(this)]);
       return rej(false);
      }else{
        this.common.alertMessage("Permission If you want to grant permission for using your camera, enable it in the app settings.","Permission",AlertMsgMode.Warning,[this.GoToAppSetting.bind(this)]);
        return rej(false);
      }
    })
    
  }
  /** Go to app setting  */
  GoToAppSetting(){
    BarcodeScanner.openAppSettings();
  }
  /**
   * Scanner start
   */
  async startScan() {
    BarcodeScanner.hideBackground(); // make background of WebView transparent
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
    // if the result has content
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
    }
    return result;
  };

  /**
  * Stop scanner
  */
  stopScan(){
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };
}
