import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Student } from '../model/student.model';
import { DataService } from '../services/data.service';
import { AddStudentDialogComponent } from './add-student-dialog/add-student-dialog.component';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Student>;
  dataSource: MatTableDataSource<Student>;
  displayedColumns = ['id', 'firstName', 'surname', 'email', 'dateofbirth', 'degreeID', 'more'];
  id: string;
  private dataSub: Subscription;

  constructor(
    private dataService: DataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.dataSub = this.dataService.getStudentUpdateListener()
      .subscribe((students: Student[]) => {
        this.dataSource.data = students;
      });
    this.dataService.getStudentsForLecturer(this.dataService.getSignedInLecturer().getDegreeIDs());
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }

  applyFilter(event: Event): void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getDegreeName(id: string): string {
    return this.dataService.getDegreeName(id);
  }

  setId(id: string): void {
    this.id = id;
  }

  editStudent(): void {
  }

  deleteStudent(): void {
  }

  openAddStudentDialog(): void {
    this.dialog.open(AddStudentDialogComponent);
  }
}
