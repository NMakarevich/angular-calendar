import { Component } from '@angular/core';
import { DateService } from './date.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  constructor(private readonly dateService: DateService) {}

  get currentMonth() {
    return this.dateService.date;
  }

  get nextMonthS() {
    return this.dateService.nextMonth();
  }

  get prevMonthS() {
    return this.dateService.prevMonth();
  }
}
