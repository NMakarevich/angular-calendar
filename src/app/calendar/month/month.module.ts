import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthComponent } from './month.component';
import { DayModule } from '../day/day.module';

@NgModule({
  declarations: [MonthComponent],
  exports: [MonthComponent],
  imports: [CommonModule, DayModule],
})
export class MonthModule {}
