import { Component, Input } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
})
export class DayComponent {
  constructor(private readonly dateService: DateService) {}

  @Input()
  date!: Date;

  getDate = () => {
    return this.date.getDate();
  };

  setClass = () => {
    let className = '';
    const day = this.date.getDay();
    const dateMonth = this.date.getMonth();
    const calendarMonth = this.dateService.date.getMonth();
    if (day === 0 || day === 6) className = 'weekend';
    if (dateMonth !== calendarMonth) className = 'outdated';
    return className;
  };
}
