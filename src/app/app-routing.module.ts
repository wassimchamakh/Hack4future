import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { OrientationComponent } from './orientation/orientation.component';
import { StudentOrientationFormComponent } from './student-orientation-form/student-orientation-form.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { StudentTestOrientationComponent } from './student-test-orientation/student-test-orientation.component';
import { TravailComponent } from './travail/travail.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent 

  },
  {path :'login',
    component: LoginComponent},
    {path: 'sign-up',
  component:SignUpComponent},

  {
    path: 'student/home',
    component: HomeStudentComponent
  },
  {path:'student/test/competance',
component : OrientationComponent},
  {
    path:'student/orientation',
    component: StudentOrientationFormComponent
  },
  {
    path:'student/evaluation',
    component: EvaluationComponent 
  } , 
  {
    path:'student/test/orientation',
    component: StudentTestOrientationComponent 
  },
  {
    path:'student/travail',
    component: TravailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
