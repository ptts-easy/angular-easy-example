import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponentComponent } from './error-component/error-component.component';
import { ComponentR1Component } from './component-r1/component-r1.component';
import { ComponentR2Component } from './component-r2/component-r2.component';
import { ComponentR3Component } from './component-r3/component-r3.component';
import { ComponentR4Component } from './component-r4/component-r4.component';
import { ComponentR5Component } from './component-r5/component-r5.component';

const routeRoutes: Routes = [
  { path: 'component1', component: ComponentR1Component },
  { path: 'component2', component: ComponentR2Component },
  { path: 'component3', component: ComponentR3Component },
  { path: 'component4', component: ComponentR4Component },
  { path: 'component5', component: ComponentR5Component },
  { path: '',   redirectTo: '/component1', pathMatch: 'full' },
  { path: '**', component: ErrorComponentComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutePageRoutingModule { }
