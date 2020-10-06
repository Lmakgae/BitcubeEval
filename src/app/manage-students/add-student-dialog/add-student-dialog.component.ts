import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Degree } from 'src/app/model/degree.model';
import { Student } from 'src/app/model/student.model';
import { DataService } from 'src/app/services/data.service';

export interface AddStudentDialogData {
  degreeID: string;
}

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.css']
})
export class AddStudentDialogComponent {
  addStudentForm = this.fb.group({
    foreNames: [null, Validators.required],
    surname: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    dateOfBirth: [null, Validators.required],
    degree: [null, Validators.required],
  });
  maxDate: Date;
  degrees: Degree[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddStudentDialogData,
    private fb: FormBuilder,
    private dataService: DataService) {
      const date = new Date();
      this.maxDate = new Date(date.getFullYear() - 15, date.getMonth(), date.getDate());
      this.degrees = this.dataService.getAllDegrees();
      if (data.degreeID !== null) {
        this.addStudentForm.get('degree').setValue(data.degreeID);
        this.addStudentForm.get('degree').disable();
      }
  }

  onAddUser(): void {
    if (this.addStudentForm.valid) {
      this.addStudentForm.get('degree').enable();
      const student = new Student(
        this.dataService.getNewStudentID(),
        this.addStudentForm.value.foreNames,
        this.addStudentForm.value.surname,
        this.addStudentForm.value.email,
        new Date(this.addStudentForm.value.dateOfBirth).getTime(),
        this.addStudentForm.value.degree
      );
      this.dataService.addNewStudent(student);
      this.dataService.getStudentsForLecturer(this.dataService.getSignedInLecturer().getDegreeIDs());
      this.dialogRef.close();
    }
  }
}
