import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  faAddressCard,
  faInfo,
  faReceipt,
  faUser,
  faAngleLeft,
  faAngleRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  faAngleLeft: IconDefinition = faAngleLeft;
  faAngleRight: IconDefinition = faAngleRight;
  faReceipt: IconDefinition = faReceipt;
  faUser: IconDefinition = faUser;
  faInfo: IconDefinition = faInfo;
  faAddressCard: IconDefinition = faAddressCard;
  @Input() isIconView: boolean;
  @Output() openSidebarEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }

  openNav() {
    this.isIconView = !this.isIconView;
    this.openSidebarEmitter.emit(this.isIconView);
  }
}
