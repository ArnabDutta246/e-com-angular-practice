import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicComponentPage } from './dynamic-component.page';

const routes: Routes = [
  {
    path: '',
    component: DynamicComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicComponentPageRoutingModule {}
