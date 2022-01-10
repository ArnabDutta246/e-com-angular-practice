import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectiveTestPage } from './directive-test.page';

const routes: Routes = [
  {
    path: '',
    component: DirectiveTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectiveTestPageRoutingModule {}
