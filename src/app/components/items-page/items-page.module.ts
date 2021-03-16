import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsPageComponent } from './items-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ItemsPageComponent
  }
]

@NgModule({
  declarations: [ItemsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ItemsPageModule { }
