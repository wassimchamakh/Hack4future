import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { StudentOrientationFormComponent } from './student-orientation-form/student-orientation-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'student/home',
    component: HomeStudentComponent
  },
  {
    path:'student/orientation',
    component: StudentOrientationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
