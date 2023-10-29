import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import timeGridPlugin from '@fullcalendar/timegrid'
@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss']
})
export class HomeStudentComponent {
  absentDetail:any
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin,timeGridPlugin],
    events: [
      { title: 'math', start: '2023-10-30T09:00:00', end: '2023-10-30T09:30:00'},
      { title: 'physique', start: '2023-10-30T10:00:00', end: '2023-10-30T10:30:00' },
      { title: 'sport', start: '2023-10-30T11:00:00', end: '2023-10-30T11:45:00'},
      { title: 'français', start: '2023-10-30T14:00:00', end: '2023-10-30T14:45:00' },
      { title: 'informatique', start: '2023-10-30T15:00:00', end: '2023-10-30T16:30:00'},
      { title: 'phylo', start: '2023-10-30T17:00:00', end: '2023-10-30T18:30:00' },
      { title: 'math', start: '2023-10-29T09:00:00', end: '2023-10-29T09:30:00'},
      { title: 'physique', start: '2023-10-29T10:00:00', end: '2023-10-29T10:30:00' },
      { title: 'sport', start: '2023-10-29T11:00:00', end: '2023-10-29T11:45:00'},
      { title: 'français', start: '2023-10-29T14:00:00', end: '2023-10-29T14:45:00' },
      { title: 'informatique', start: '2023-10-29T15:00:00', end: '2023-10-29T16:30:00'},
      { title: 'phylo', start: '2023-10-30T17:00:00', end: '2023-10-30T18:30:00' },

      { title: 'math', start: '2023-10-27T09:00:00', end: '2023-10-27T09:30:00'},
      { title: 'physique', start: '2023-10-27T10:00:00', end: '2023-10-27T10:30:00' },
      { title: 'sport', start: '2023-10-27T11:00:00', end: '2023-10-27T11:45:00'},
      { title: 'français', start: '2023-10-27T14:00:00', end: '2023-10-27T14:45:00' },
      { title: 'informatique', start: '2023-10-27T15:00:00', end: '2023-10-27T16:30:00'},
      { title: 'phylo', start: '2023-10-27T17:00:00', end: '2023-10-27T18:30:00' },
    ],
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridWeek,timeGridDay' // user can switch between the two
    }
  };
  visibleNotif:boolean=false
  showNotif(){
    this.absentDetail = localStorage.getItem('absent')
    this.visibleNotif=true
  }
}
