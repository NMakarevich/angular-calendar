import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() selectItems!: Array<string>;

  @Output() setItemValue = new EventEmitter<string>();

  @Input() label!: string;

  @Input() selectedValue!: string;

  visible = false;

  changeVisible = () => {
    this.visible = !this.visible;
  };

  selectValue = (value: string) => {
    this.selectedValue = value;
    this.changeVisible();
    this.setItemValue.emit(this.selectedValue);
  };
}
