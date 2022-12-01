import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { DateService } from '../date.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('moveForward', [
      state('start', style({ transform: 'translateX(calc(-100% / 3))' })),
      state('forward', style({ transform: 'translateX(calc(-100% / 3 * 2))' })),
      transition('start => forward', [animate('0.5s')]),
      transition('forward => start', [animate('0s')]),
    ]),
    trigger('moveBack', [
      state('start', style({ transform: 'translateX(calc(-100% / 3)' })),
      state('back', style({ transform: 'translateX(0)' })),
      transition('start => back', [animate('0.5s')]),
      transition('back => start', [animate('0s')]),
    ]),
  ],
})
export class SliderComponent {
  moveForward = false;

  moveBack = false;

  constructor(private readonly dateService: DateService) {}

  nextMonth = () => {
    this.moveForward = true;
  };

  prevMonth = () => {
    this.moveBack = true;
  };

  endAnimation() {
    if (this.moveForward)
      this.dateService.updateDate(this.dateService.nextMonth());
    if (this.moveBack)
      this.dateService.updateDate(this.dateService.prevMonth());
    this.moveBack = false;
    this.moveForward = false;
  }
}
