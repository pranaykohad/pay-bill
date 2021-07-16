import { Component, OnInit } from '@angular/core';
import { ALERT_EVENTS } from 'src/global-enums';
import { Alert } from 'src/model/Alert';
import { DataSharingService } from 'src/service/data-sharing.service';
import { SettingService } from 'src/service/setting.service';
import { ISetting, Setting } from '../../model/Setting';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  setting: ISetting;
  isSaveAllowed: boolean;
  constructor(
    private settingService: SettingService,
    private dataSharing: DataSharingService
  ) {
    this.setting = new Setting();
  }

  ngOnInit(): void {
    this.settingService.getSetting().subscribe((res) => {
      this.setting = res['data'];
    });
  }

  saveSetting() {
    this.settingService.saveSetting(this.setting).subscribe((res) => {
      let message = null;
      message = this.buildAlertMessage(res, message);
      this.dataSharing.subject.next(message);
    });
  }

  onChange() {
    this.isSaveAllowed = true;
  }

  private buildAlertMessage(res: ISetting, message: any): Alert {
    if (res['status'] === 'SUCCESS') {
      message = {
        name: ALERT_EVENTS.SUCCESS,
        content: 'Settings saved successfully',
      };
    } else {
      message = {
        name: ALERT_EVENTS.FAIL,
        content: 'Error while saving settings, please contact administrator',
      };
    }
    return message;
  }
}
