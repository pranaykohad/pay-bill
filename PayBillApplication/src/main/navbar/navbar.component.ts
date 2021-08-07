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
  showLoader = false;

  constructor(private dataSharing: DataSharingService) {
    this.subscription.add(
      this.dataSharing.subject.subscribe((res: any) => {
        if (res.name === 'SPINNER') {
          if (res.content === true) {
            this.showLoader = true;
          } else {
            setTimeout(() => {
              this.showLoader = false;
            }, 500);
          }
        }
        if (res.name !== 'SPINNER') {
          setTimeout(() => {
            this.alertHandler({ message: res.content, type: res.name });
          }, 500);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.showLoader = false;
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
