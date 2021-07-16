import { Alert } from './../../model/Alert';
import { Component } from '@angular/core';
import { ALERT_EVENTS } from 'src/global-enums';
import { ILedger } from 'src/model/Ledger';
import { ISetting, Setting } from 'src/model/Setting';
import { DataSharingService } from 'src/service/data-sharing.service';
import { EventManager } from 'src/service/event-manager';
import { LedgerService } from 'src/service/ledger.service';
import { SettingService } from 'src/service/setting.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent {
  setting: ISetting;
  constructor(
    public eventManager: EventManager,
    private ledgerService: LedgerService,
    private dataSharing: DataSharingService,
    private settingService: SettingService
  ) {
    this.setting = new Setting();
    this.setting.daAllowancePer = 17;
    this.setting.spclAllowancePer = 10;
    this.setting.daOnTrAllowancePer = 17;
    this.initSettings();
  }

  savePayBill() {
    this.ledgerService.saveLedger(this.eventManager.ledger).subscribe((res) => {
      let message = null;
      message = this.buildAlertMessage(res, message);
      this.dataSharing.subject.next(message);
    });
  }

  private buildAlertMessage(res: ILedger, message: any): Alert {
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

  private initSettings() {
    this.settingService.getSetting().subscribe((res) => {
      this.setting = res['data'];
    });
  }
}
