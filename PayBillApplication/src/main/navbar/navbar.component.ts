import { Component } from '@angular/core';
import { Alert } from '../../model/Alert';
import { DataSharingService } from './../../service/data-sharing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  alert: Alert = new Alert(null, null);

  constructor(private dataSharing: DataSharingService) {
    this.dataSharing.subject.subscribe((res: any) => {
      this.alertHandler({ message: res.content, type: res.name });
    });
  }

  alertHandler(alert: Alert) {
    this.alert = alert;
  }
}
