import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule,
    MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule,
    MatDialogModule, MatInputModule, MatSelectModule, MatRadioModule, MatDatepickerModule,
    MatNativeDateModule, MatSnackBarModule
  ],
  exports: [
    MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule,
    MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule,
    MatDialogModule, MatInputModule, MatSelectModule, MatRadioModule, MatDatepickerModule,
    MatNativeDateModule, MatSnackBarModule
  ]
})
export class MaterialModule { }
