import { Component } from '@angular/core';

interface Event {
  title: string;
  startDate: Date;
  endDate: Date;
  notes?: string;
}

@Component({
  selector: 'ns-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  events: Event[] = [];
  newEventTitle: string = '';
  newEventStartDate: Date = new Date();
  newEventEndDate: Date = new Date();
  newEventNotes: string = '';

  addEvent() {
    if (this.newEventTitle.trim()) {
      const newEvent: Event = {
        title: this.newEventTitle,
        startDate: this.newEventStartDate,
        endDate: this.newEventEndDate,
        notes: this.newEventNotes
      };
      this.events.push(newEvent);
      this.resetNewEventForm();
    }
  }

  resetNewEventForm() {
    this.newEventTitle = '';
    this.newEventStartDate = new Date();
    this.newEventEndDate = new Date();
    this.newEventNotes = '';
  }
}