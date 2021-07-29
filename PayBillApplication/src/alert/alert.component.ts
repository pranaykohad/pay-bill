import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  private _message: string;
  @Input() type: string = 'fail';

  constructor(private cdrf: ChangeDetectorRef) {
    this.message = null;
  }

  @Input()
  set message(message: string) {
    this._message = message;
  }

  get message() {
    return this._message;
  }
}
