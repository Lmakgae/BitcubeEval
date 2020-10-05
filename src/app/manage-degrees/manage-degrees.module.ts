import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageDegreesRoutingModule } from './manage-degrees-routing.module';
import { ManageDegreesComponent } from './manage-degrees.component';
import { MaterialModule } from '../shared/material.module';
import { DegreeCoursesComponent } from './degree-courses/degree-courses.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [ManageDegreesComponent, DegreeCoursesComponent],
  imports: [
    CommonModule,
    ManageDegreesRoutingModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class ManageDegreesModule { }
