import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HomeStudentComponent } from './home-student/home-student.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FullCalendarModule } from '@fullcalendar/angular';
import { StudentSideMenuComponent } from './student-side-menu/student-side-menu.component';
import { StudentOrientationFormComponent } from './student-orientation-form/student-orientation-form.component';
import {MatCardModule} from '@angular/material/card';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    HomeStudentComponent,
    StudentSideMenuComponent,
    StudentOrientationFormComponent,
  ],
  imports: [
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    FullCalendarModule,
    MatCardModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  exports: [
    StudentSideMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
