import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { InputPageComponent } from './input-page.component';
import { ChildComponent } from './child/child.component';

const myRoutes: Routes = [
  { path: '', component: InputPageComponent }
];

@NgModule({
  declarations: [
    InputPageComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(myRoutes)
  ],
  exports: [
    InputPageComponent,
    ChildComponent
  ]
})
export class InputPageModule { }
