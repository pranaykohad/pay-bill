import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alert } from '../../model/Alert';
import { DataSharingService } from './../../service/data-sharing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
  alert: Alert = new Alert(null, null);
  private subscription: Subscription = new Subscription();
  private alertTimeout: any;

  constructor(private dataSharing: DataSharingService) {
    this.subscription.add(
      this.dataSharing.subject.subscribe((res: any) => {
        this.alertHandler({ message: res.content, type: res.name });
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  alertHandler(alert: Alert) {
    this.alert = alert;
    if (this.alertTimeout) {
      clearTimeout(this.alertTimeout);
    }
    this.alertTimeout = setTimeout(() => {
      this.alert = new Alert(null, null);
    }, 5000);
  }
}
