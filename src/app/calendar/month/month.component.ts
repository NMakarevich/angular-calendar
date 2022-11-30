import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss'],
})
export class MonthComponent {
  @Input() date!: Date;

  get weekDays() {
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  }

  generateDaysArray = () => {
    const year = this.date.getFullYear();
    const month = this.date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const lastDay = new Date(year, month, daysInMonth).getDay();
    const prevMonthDays = firstDay ? firstDay - 1 : 6;
    const nextMonthDays = lastDay ? 7 - lastDay : 0;

    const days = [];
    for (let i = prevMonthDays; i >= 1; i -= 1) {
      days.push(new Date(year, month, 1 - i));
    }
    for (let i = 1; i <= daysInMonth; i += 1) {
      days.push(new Date(year, month, i));
    }
    for (let i = 1; i <= nextMonthDays; i += 1) {
      days.push(new Date(year, month, daysInMonth + i));
    }

    return days;
  };
}
