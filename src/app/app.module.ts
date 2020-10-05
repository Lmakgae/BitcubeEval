import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { AddStudentDialogComponent } from './manage-students/add-student-dialog/add-student-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManageStudentsComponent,
    AddStudentDialogComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
