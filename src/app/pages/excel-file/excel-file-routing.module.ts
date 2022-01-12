import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcelFilePage } from './excel-file.page';

const routes: Routes = [
  {
    path: '',
    component: ExcelFilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcelFilePageRoutingModule {}
