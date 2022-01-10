import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirective } from './structural/structural.directive';



@NgModule({
  declarations: [
    StructuralDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[]
})
export class DirectivesModule { }
