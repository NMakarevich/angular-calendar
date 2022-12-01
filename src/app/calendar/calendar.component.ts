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

  get stringMonth() {
    return this.monthList[this.currentMonth.getMonth()];
  }

  get stringYear() {
    return this.dateService.date.getFullYear().toString();
  }

  setMonth = (value: string) => {
    const month = this.monthList.indexOf(value as string);
    const year = this.dateService.date.getFullYear();
    this.dateService.updateDate(new Date(year, month, 1));
  };

  setYear = (value: string) => {
    const month = this.dateService.date.getMonth();
    const year = parseInt(value);
    this.dateService.updateDate(new Date(year, month, 1));
  };

  get monthList() {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }

  get years() {
    const yearsArr = [];
    for (let i = 1970; i <= 2030; i += 1) {
      yearsArr.push(i.toString());
    }
    return yearsArr;
  }
}
