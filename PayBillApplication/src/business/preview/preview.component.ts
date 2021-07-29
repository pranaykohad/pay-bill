import { Component } from '@angular/core';
import { ALERT_EVENTS } from 'src/global-enums';
import { ILedger } from 'src/model/Ledger';
import { DataSharingService } from 'src/service/data-sharing.service';
import { LedgerManager } from 'src/service/ledger-manager';
import { LedgerService } from 'src/service/ledger.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent {
  constructor(
    public ledgerMgr: LedgerManager,
    private ledgerService: LedgerService,
    private dataSharing: DataSharingService
  ) {}

  savePayBill() {
    this.ledgerService.saveLedger(this.ledgerMgr.ledger).subscribe((res) => {
      let message = null;
      message = this.buildAlertMessage(res, message);
      this.dataSharing.subject.next(message);
    });
  }

  private buildAlertMessage(res: ILedger, message: any) {
    if (res['status'] === 'SUCCESS') {
      message = {
        name: ALERT_EVENTS.SUCCESS,
        content: 'Pay bill is saved successfully',
      };
    } else {
      message = {
        name: ALERT_EVENTS.FAIL,
        content: 'Error while saving pay bill, please contact administrator',
      };
    }
    return message;
  }
}
