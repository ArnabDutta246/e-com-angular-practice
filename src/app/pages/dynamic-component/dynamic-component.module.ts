import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DynamicComponentPageRoutingModule } from './dynamic-component-routing.module';

import { DynamicComponentPage } from './dynamic-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DynamicComponentPageRoutingModule
  ],
  declarations: [DynamicComponentPage]
})
export class DynamicComponentPageModule {}
