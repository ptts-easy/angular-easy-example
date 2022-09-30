import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutePageComponent } from './route-page.component';

import { RoutePageRoutingModule } from './route-page-routing.module';

@NgModule({
  declarations: [
    RoutePageComponent//,
  ],
  imports: [
    CommonModule,
    RoutePageRoutingModule
  ],
  exports: [
    RoutePageComponent,
    RoutePageRoutingModule
  ]
})
export class RoutePageModule { }
