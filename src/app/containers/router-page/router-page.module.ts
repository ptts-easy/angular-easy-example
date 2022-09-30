import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../components/nav/nav.component';
import { RouterPageComponent } from './router-page.component';

import { RouterPageRoutingModule } from './router-page-routing.module';

@NgModule({
  declarations: [
    NavComponent,
    RouterPageComponent
  ],
  imports: [
    CommonModule,
    RouterPageRoutingModule
  ],
  exports: [
    NavComponent,
    RouterPageComponent,
    RouterPageRoutingModule
  ]
})
export class RouterPageModule { }
