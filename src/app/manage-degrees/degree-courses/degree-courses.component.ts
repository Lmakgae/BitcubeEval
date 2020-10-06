import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AddStudentDialogComponent } from 'src/app/manage-students/add-student-dialog/add-student-dialog.component';
import { RemoveStudentDialogComponent } from 'src/app/manage-students/remove-student-dialog/remove-student-dialog.component';
import { Course } from 'src/app/model/course.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-degree-courses',
  templateUrl: './degree-courses.component.html',
  styleUrls: ['./degree-courses.component.css']
})
export class DegreeCoursesComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Course>;
  @Input() degreeID: string;
  @Input() degreeName: string;
  dataSource: MatTableDataSource<Course>;
  displayedColumns = ['id', 'name', 'duration'];
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private dataService: DataService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataService.getCoursesForDegree(this.degreeID));
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  getDegreeName(id: string): string {
    return this.dataService.getDegreeName(id);
  }

  openAddStudentDialog(): void {
    this.dialog.open(AddStudentDialogComponent, {
      data: { degreeID: this.degreeID }
    });
  }

  openRemoveStudentDialog(): void {
    const dialogRef = this.dialog.open(RemoveStudentDialogComponent, {
      data: { degreeID: this.degreeID, name: this.degreeName }
    });
    dialogRef.afterClosed().subscribe(results => {
      if (results) {
        this.snackBar.open('Student is removed', 'Ok', {
          duration: 3000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }

    });
  }


}
