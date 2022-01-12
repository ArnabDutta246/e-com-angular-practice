import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PageDataResolverService } from './services/resolver/pageDataResolver/page-data-resolver.service';
import { ProductFetchService } from './services/resolver/productFetch/product-fetch.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-one',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'page-one-edit',
    loadChildren: () => import('./pages/admin/page-one-edit/page-one-edit.module').then( m => m.PageOneEditPageModule),
    // resolve: { pageData: PageDataResolverService }
  },
  {
    path: 'page-one',
    loadChildren: () => import('./pages/client/page-one/page-one.module').then( m => m.PageOnePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/client/products/products.module').then( m => m.ProductsPageModule),
    resolve: { products: ProductFetchService }
  },
  {
    path: 'directive-test',
    loadChildren: () => import('./pages/directive-test/directive-test.module').then( m => m.DirectiveTestPageModule)
  },
  {
    path: 'push-notification',
    loadChildren: () => import('./pages/push-notification/push-notification.module').then( m => m.PushNotificationPageModule)
  },
  {
    path: 'dynamic-component',
    loadChildren: () => import('./pages/dynamic-component/dynamic-component.module').then( m => m.DynamicComponentPageModule)
  },
  {
    path: 'excel-file',
    loadChildren: () => import('./pages/excel-file/excel-file.module').then( m => m.ExcelFilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
