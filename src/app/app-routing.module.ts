import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: () => import('./components/items-page/items-page.module').then(m => m.ItemsPageModule)
      },
      {
        path: 'item/:id',
        loadChildren: () => import('./components/single-item/single-item.module').then(m => m.SingleItemModule)
      }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
