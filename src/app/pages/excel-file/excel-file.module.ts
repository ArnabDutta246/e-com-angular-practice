import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcelFilePageRoutingModule } from './excel-file-routing.module';

import { ExcelFilePage } from './excel-file.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcelFilePageRoutingModule
  ],
  declarations: [ExcelFilePage]
})
export class ExcelFilePageModule {}
