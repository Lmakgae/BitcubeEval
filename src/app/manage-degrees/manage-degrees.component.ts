import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Degree } from '../model/degree.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-manage-degrees',
  templateUrl: './manage-degrees.component.html',
  styleUrls: ['./manage-degrees.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ManageDegreesComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Degree>;
  dataSource: MatTableDataSource<Degree>;
  expandedElement: Degree | null;
  displayedColumns = ['id', 'name', 'duration', 'lecturer_name'];
  id: string;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataService.getDegreesForLecturer(this.dataService.getSignedInLecturer().getId()));
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  getLecturerName(id: string): string {
    return this.dataService.getLecturerNameSurname(id);
  }

  setId(id: string): void {
    this.id = id;
  }

  editDegree(): void {
  }

  deleteDegree(): void {
  }

}
