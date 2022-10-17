import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ParentPageComponent } from './parent-page.component';
import { ChildPageComponent } from './child-page/child-page.component';

const myRoutes: Routes = [
  { path: '', component: ParentPageComponent }
];

@NgModule({
  declarations: [
    ParentPageComponent,
    ChildPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(myRoutes)
  ],
  exports: [
    ParentPageComponent,
    ChildPageComponent
  ]
})
export class ParentPageModule { }
