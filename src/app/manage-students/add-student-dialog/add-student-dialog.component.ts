import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Degree } from 'src/app/model/degree.model';
import { Student } from 'src/app/model/student.model';
import { DataService } from 'src/app/services/data.service';

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
    private fb: FormBuilder,
    private dataService: DataService) {
      const date = new Date();
      this.maxDate = new Date(date.getFullYear() - 15, date.getMonth(), date.getDate());
      this.degrees = this.dataService.getAllDegrees();
  }

  onAddUser(): void {
    if (this.addStudentForm.valid) {
      const student = new Student(
        this.dataService.getNewStudentID(),
        this.addStudentForm.value.foreNames,
        this.addStudentForm.value.surname,
        this.addStudentForm.value.email,
        new Date(this.addStudentForm.value.dateOfBirth).getTime(),
        this.addStudentForm.value.degree
      );
      this.dataService.addNewStudent(student);
      this.dataService.getStudentsForLecturer(['BEngCE']);
      this.dialogRef.close();
    }
  }
}
