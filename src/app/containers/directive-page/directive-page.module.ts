import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DirectivePageComponent } from './directive-page.component';

const myRoutes: Routes = [
  { path: '', component: DirectivePageComponent }
];

@NgModule({
  declarations: [
    DirectivePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(myRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DirectivePageModule { }
