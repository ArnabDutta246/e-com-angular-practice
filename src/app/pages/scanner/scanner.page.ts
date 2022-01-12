import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScanResult } from '@capacitor-community/barcode-scanner';
import { ScannerService } from 'src/app/services/scanner/scanner.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit,OnDestroy {
  result = null;
  scanActive = false;
  constructor(private scnnerServ:ScannerService) { }

  ngOnInit() {
  }
  ngOnDestroy(){
   this.stopScanner();
  }
  ionViewWillEnter(){
    this.scnnerServ.prepareScanner();
  }

  async startScanner(){
    const allowed = await this.scnnerServ.checkPermission()
    if(allowed){
      this.scanActive = true;
      this.scnnerServ.startScan().then((result: ScanResult)=>{
        console.log(result);
        // if the result has content
        if (result.hasContent) {
          console.log(result.content); // log the raw scanned content
        }
      })
    }
  }

  stopScanner(){
    this.scnnerServ.stopScan();
  }
}
