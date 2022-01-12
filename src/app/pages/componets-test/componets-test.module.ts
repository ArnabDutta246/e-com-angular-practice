import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponetsTestPageRoutingModule } from './componets-test-routing.module';

import { ComponetsTestPage } from './componets-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponetsTestPageRoutingModule
  ],
  declarations: [ComponetsTestPage]
})
export class ComponetsTestPageModule {}
