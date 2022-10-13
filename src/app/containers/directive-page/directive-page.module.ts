import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    RouterModule.forChild(myRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DirectivePageModule { }
