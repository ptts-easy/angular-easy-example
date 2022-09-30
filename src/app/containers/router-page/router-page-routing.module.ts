import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routerRoutes: Routes = [
  { path: '',   redirectTo: '/bind', pathMatch: 'full' },  
  { 
    path: 'bind',
    loadChildren: () => import('../bind-page/bind-page.module').then(m => m.BindPageModule)
  },
  { 
    path: 'layout', 
    loadChildren: () => import('../layout-page/layout-page.module').then(m => m.LayoutPageModule)
  },
  { 
    path: 'route',
    loadChildren: () => import('../route-page/route-page.module').then(m => m.RoutePageModule)
  },
  { 
    path: 'input',
    loadChildren: () => import('../input-page/input-page.module').then(m => m.InputPageModule)
  },
  { 
    path: 'lifecycle',
    loadChildren: () => import('../hook-page/hook-page.module').then(m => m.HookPageModule)
  },
  { 
    path: 'event',
    loadChildren: () => import('../event-page/event-page.module').then(m => m.EventPageModule)
  },
  { 
    path: 'directive',
    loadChildren: () => import('../directive-page/directive-page.module').then(m => m.DirectivePageModule)
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RouterPageRoutingModule { }
