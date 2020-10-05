import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Lecturer } from './model/lecturer.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  toggleSideNav = true;
  navigations = [
    { title: 'Students', icon: 'people', routerLink: 'manage-students'},
    { title: 'Degrees', icon: 'school', routerLink: 'manage-degrees'},
    { title: 'Courses', icon: 'local_library', routerLink: 'manage-courses'}];

  private signedLecturerSub: Subscription;
  signedLecturer: Lecturer = null;
  signedLecturerName: string;

  constructor(
    private dataService: DataService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.signedLecturerSub = this.dataService.getSignedLecturerUpdateListener()
      .subscribe((lecturer: Lecturer) => {
        if (lecturer === null) {
          this.signedLecturerName = 'Signed Out';
        } else {
          this.signedLecturerName = lecturer.getFullName();
        }
      });

    this.dataService.signIn(this.dataService.getSignedInLecturer());

  }

  ngOnDestroy(): void {
    this.signedLecturerSub.unsubscribe();
  }

  signOut(): void {
    if (this.dataService.getSignedInLecturer() !== null) {
      this.dataService.signOut();
      this.router.navigate(['auth'], { queryParams: { returnUrl: this.router.url }});
    }
  }


}
