import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponetsTestPage } from './componets-test.page';

const routes: Routes = [
  {
    path: '',
    component: ComponetsTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponetsTestPageRoutingModule {}
