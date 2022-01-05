import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageOneEditPageRoutingModule } from './page-one-edit-routing.module';

import { PageOneEditPage } from './page-one-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageOneEditPageRoutingModule
  ],
  declarations: [PageOneEditPage]
})
export class PageOneEditPageModule {}
