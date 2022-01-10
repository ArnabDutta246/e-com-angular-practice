import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectiveTestPageRoutingModule } from './directive-test-routing.module';

import { DirectiveTestPage } from './directive-test.page';
import { BasicDirective } from 'src/app/directives/basic/basic.directive';
import { StructuralDirective } from 'src/app/directives/structural/structural.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectiveTestPageRoutingModule
  ],
  declarations: [DirectiveTestPage,BasicDirective,StructuralDirective],
  exports:[BasicDirective,StructuralDirective]
})
export class DirectiveTestPageModule {}
