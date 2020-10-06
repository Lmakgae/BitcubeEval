import { OnDestroy } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/model/student.model';
import { DataService } from 'src/app/services/data.service';

export interface RemoveStudentDialogData {
  degreeID: string;
  name: string;
}

@Component({
  selector: 'app-remove-student-dialog',
  templateUrl: './remove-student-dialog.component.html',
  styleUrls: ['./remove-student-dialog.component.css']
})
export class RemoveStudentDialogComponent implements OnInit, OnDestroy {

  degreeName: string;
  studentList: Student[];
  private studentSub: Subscription;

  constructor(
    public dialogRef: MatDialogRef<RemoveStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RemoveStudentDialogData,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.studentSub = this.dataService.getStudentUpdateListener()
      .subscribe((students: Student[]) => {
        this.studentList = students;
      });
    this.dataService.getStudentsForLecturer([this.data.degreeID]);
    this.degreeName = this.data.name;
  }

  ngOnDestroy(): void {
    this.studentSub.unsubscribe();
  }

  deleteStudent(index: number): void {
    this.dataService.deleteStudent(this.studentList[index].getId());
    this.dialogRef.close(true);
  }
}
