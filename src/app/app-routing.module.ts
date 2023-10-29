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
import { EnseignantHomePageComponent } from './enseignant-home-page/enseignant-home-page.component';
import { NotesComponent } from './enseignant/notes/notes.component';
import { AdministrationHomeComponent } from './administration-home/administration-home.component';
import { AdministrationCalendrierComponent } from './administration-calendrier/administration-calendrier.component';

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
  }, 
  {
    path:'student/test/orientation',
    component: StudentTestOrientationComponent 
  },
  {
    path:'student/travail',
    component: TravailComponent},
    {path:'enseignant/home',
    component:EnseignantHomePageComponent
  }, 
  {
    path:'enseignant/notes' , 
    component:NotesComponent
  },
  {
    path:'administration/home',
    component:AdministrationHomeComponent
  },
  {
    path:'administration/calendrier',
    component:AdministrationCalendrierComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
