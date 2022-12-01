import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { MonthModule } from './month/month.module';
import { DayModule } from './day/day.module';
import { DateService } from './date.service';
import { SliderModule } from './slider/slider.module';
import { SelectModule } from './select/select.module';

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule, MonthModule, DayModule, SliderModule, SelectModule],
  providers: [DateService],
  exports: [CalendarComponent],
})
export class CalendarModule {}
