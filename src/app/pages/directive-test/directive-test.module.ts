import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectiveTestPageRoutingModule } from './directive-test-routing.module';

import { DirectiveTestPage } from './directive-test.page';
import { BasicDirective } from 'src/app/directives/basic/basic.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectiveTestPageRoutingModule
  ],
  declarations: [DirectiveTestPage,BasicDirective],
  exports:[BasicDirective]
})
export class DirectiveTestPageModule {}
