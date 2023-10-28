import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { OrientationComponent } from './orientation/orientation.component';

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
  {path:'student/test',
component : OrientationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
