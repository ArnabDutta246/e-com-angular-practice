import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componets-test',
  templateUrl: './componets-test.page.html',
  styleUrls: ['./componets-test.page.scss'],
})
export class ComponetsTestPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(e){
    console.log('segment choose',e.taget.value);
  }

}
