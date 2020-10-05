import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { AuthGuard } from './sign-in/auth.guard';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '',
    canActivate: [AuthGuard],
    component: DashboardComponent},
  { path: 'manage-students',
    canActivate: [AuthGuard],
    component: ManageStudentsComponent},
  { path: 'manage-degrees',
    canActivate: [AuthGuard],
    loadChildren: () => import('./manage-degrees/manage-degrees.module').then(m => m.ManageDegreesModule) },
  { path: 'manage-courses',
    canActivate: [AuthGuard],
    loadChildren: () => import('./manage-courses/manage-courses.module').then(m => m.ManageCoursesModule) },
  { path: 'auth',
    component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
