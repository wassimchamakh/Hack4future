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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    HomeStudentComponent,
    StudentSideMenuComponent,
  ],
  imports: [
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    FullCalendarModule
  ],
  exports: [
    StudentSideMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
