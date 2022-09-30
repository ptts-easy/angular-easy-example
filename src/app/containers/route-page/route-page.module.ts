import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutePageRoutingModule } from './route-page-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RoutePageRoutingModule
  ],
  exports: [
    RoutePageRoutingModule
  ]
})
export class RoutePageModule { }
