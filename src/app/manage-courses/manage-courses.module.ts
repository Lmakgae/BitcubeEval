import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageCoursesRoutingModule } from './manage-courses-routing.module';
import { ManageCoursesComponent } from './manage-courses.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [ManageCoursesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ManageCoursesRoutingModule,
  ]
})
export class ManageCoursesModule { }
