import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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

  constructor(
    private dataService: DataService
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
}
