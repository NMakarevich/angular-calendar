import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
})
export class DayComponent {
  @Input()
  date!: Date;

  @Input()
  month!: number;

  getDate = () => {
    return this.date.getDate();
  };

  setClass = () => {
    const className = '';
    const day = this.date.getDay();
    const dateMonth = this.date.getMonth();
    if (this.date.toLocaleDateString() === new Date().toLocaleDateString())
      return 'today';
    if (dateMonth !== this.month) return 'outdated';
    if (day === 0 || day === 6) return 'weekend';
    return className;
  };
}
