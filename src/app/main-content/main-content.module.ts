import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentRoutingModule } from './main-content-routing.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainContentRoutingModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainContentModule { }
