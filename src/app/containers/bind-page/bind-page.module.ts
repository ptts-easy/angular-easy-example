import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { BindPageComponent } from './bind-page.component';

const myRoutes: Routes = [
  { path: '', component: BindPageComponent }
];

@NgModule({
  declarations: [
    BindPageComponent
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
export class BindPageModule { }
