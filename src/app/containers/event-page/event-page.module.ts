import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EventPageComponent } from './event-page.component';

const myRoutes: Routes = [
  { path: '', component: EventPageComponent }
];

@NgModule({
  declarations: [
    EventPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(myRoutes)
  ],
  exports: [
    EventPageComponent
  ]
})
export class EventPageModule { }
