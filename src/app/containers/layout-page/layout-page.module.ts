import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPageComponent } from './layout-page.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentA1Component } from './component-a/component-a1/component-a1.component';
import { ComponentA2Component } from './component-a/component-a2/component-a2.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentB1Component } from './component-b/component-b1/component-b1.component';
import { ComponentB2Component } from './component-b/component-b2/component-b2.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    ComponentAComponent,
    ComponentA1Component,
    ComponentA2Component,
    ComponentBComponent,
    ComponentB1Component,
    ComponentB2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutPageComponent,
    ComponentAComponent,
    ComponentA1Component,
    ComponentA2Component,
    ComponentBComponent,
    ComponentB1Component,
    ComponentB2Component
  ]
})
export class LayoutPageModule { }
