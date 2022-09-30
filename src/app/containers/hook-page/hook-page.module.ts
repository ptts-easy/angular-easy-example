import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HookPageComponent } from './hook-page.component';

const myRoutes: Routes = [
  { path: '', component: HookPageComponent }
];

@NgModule({
  declarations: [
    HookPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(myRoutes)
  ],
  exports: [
    HookPageComponent
  ]
})
export class HookPageModule { }
