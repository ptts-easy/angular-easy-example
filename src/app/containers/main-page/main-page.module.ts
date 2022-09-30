import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

import { RouterPageModule } from '../router-page/router-page.module';

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterPageModule
  ],
  exports: [
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    RouterPageModule
  ]
})
export class MainPageModule { }
