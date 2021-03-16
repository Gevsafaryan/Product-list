import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleItemComponent } from './single-item.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SingleItemComponent
  }
]

@NgModule({
  declarations: [SingleItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SingleItemModule { }
