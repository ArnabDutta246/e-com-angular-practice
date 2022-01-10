import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.page.html',
  styleUrls: ['./directive-test.page.scss'],
})
export class DirectiveTestPage implements OnInit {
  color ='green';
  condition = false;
  constructor() { }

  ngOnInit() {
  }

}
