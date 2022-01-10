import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PageDataResolverService } from './services/resolver/pageDataResolver/page-data-resolver.service';
import { ProductFetchService } from './services/resolver/productFetch/product-fetch.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
