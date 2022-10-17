import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EventPageComponent } from './event-page.component';
import { InputOutputPageComponent } from './input-output-page/input-output-page.component';

const myRoutes: Routes = [
  { path: '', component: EventPageComponent }
];

@NgModule({
  declarations: [
    EventPageComponent,
    InputOutputPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(myRoutes)
  ],
  exports: [
    EventPageComponent,
    InputOutputPageComponent
  ]
})
export class EventPageModule { }
