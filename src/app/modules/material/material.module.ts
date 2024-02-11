import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { WorkComponent } from './work/work.component';


@NgModule({
  declarations: [
    WorkComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule
  ]
})
export class MaterialModule { }
