import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  date: Date = new Date();

  stringDate = () => {
    return this.date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  };

  nextMonth = () => {
    const year = this.date.getFullYear();
    const month = this.date.getMonth();
    return new Date(year, month + 1, 1);
  };

  prevMonth = () => {
    const year = this.date.getFullYear();
    const month = this.date.getMonth();
    return new Date(year, month - 1, 1);
  };

  updateDate = (newDate: Date) => {
    this.date = newDate;
  };
}
