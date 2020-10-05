import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lecturer } from '../model/lecturer.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  lecturerList: Lecturer[];

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.lecturerList = dataService.getAllLecturers();
  }

  ngOnInit(): void {
  }

  getDegreeName(id: string): string {
    return this.dataService.getDegreeName(id);
  }

  signIn(index: number): void {
    this.dataService.signIn(this.lecturerList[index]);
    const returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    this.router.navigateByUrl(returnUrl);
  }

}
