import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageOneEditPage } from './page-one-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PageOneEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageOneEditPageRoutingModule {}
