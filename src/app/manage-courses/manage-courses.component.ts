import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Course } from '../model/course.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.css']
})
export class ManageCoursesComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Course>;
  dataSource: MatTableDataSource<Course>;
  displayedColumns = ['id', 'name', 'duration', 'degree_name', 'more'];
  id: string;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataService.getCoursesForDegrees(this.dataService.getSignedInLecturer().getDegreeIDs()));
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
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

  editCourse(): void {
  }

  deleteCourse(): void {
  }
}
