import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { DatePicker } from '../../model/DatePicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  @Input() initialDate: DatePicker;
  @Output() dateEmitter = new EventEmitter<DatePicker>();
  constructor(private calendar: NgbCalendar) {
    this.initialDate = this.calendar.getToday();
  }

  onChange(event: any) {
    console.log(event);
  }
}
