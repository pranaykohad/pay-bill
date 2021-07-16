import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { DatePicker } from '../../model/DatePicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  @Input() disabled: boolean = true;
  private _initialDate: DatePicker;
  @Output() dateEmitter = new EventEmitter<DatePicker>();
  constructor(private calendar: NgbCalendar) {
    this.initialDate = this.calendar.getToday();
  }

  @Input()
  set initialDate(initialDate: DatePicker) {
    this._initialDate = initialDate;
    this.dateEmitter.emit(this._initialDate);
  }

  get initialDate() {
    return this._initialDate;
  }
}
