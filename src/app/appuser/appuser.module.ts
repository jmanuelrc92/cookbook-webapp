import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppuserRoutingModule } from './appuser-routing.module';
import { AppuserComponent } from './appuser.component';


@NgModule({
  declarations: [
    AppuserComponent
  ],
  imports: [
    CommonModule,
    AppuserRoutingModule
  ]
})
export class AppuserModule { }
