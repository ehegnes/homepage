import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySetupComponent } from './my-setup.component';
import { MySetupRoutingModule } from './my-setup-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatCardModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MySetupRoutingModule,
    FlexLayoutModule,
    // Material Design Modules
    MatCardModule,
  ],
  declarations: [
    MySetupComponent,
  ]
})
export class MySetupModule { }
