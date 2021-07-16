import { Component } from '@angular/core';
import { ISetting, Setting } from 'src/model/Setting';
import { EventManager } from 'src/service/event-manager';
import { SettingService } from 'src/service/setting.service';

@Component({
  selector: 'app-allowance',
  templateUrl: './allowance.component.html',
  styleUrls: ['./allowance.component.scss'],
})
export class AllowanceComponent {
  setting: ISetting;

  constructor(
    public eventManager: EventManager,
    private settingService: SettingService
  ) {
    this.setting = new Setting();
    this.setting.daAllowancePer = 17;
    this.setting.spclAllowancePer = 10;
    this.setting.daOnTrAllowancePer = 17;
    this.initSettings();
  }

  calculateOtherFields(matrix: number) {
    this.eventManager.ledger.allowance.payInPayMatrix = matrix;
    this.eventManager.ledger.allowance.dearnessAllow = Math.round(
      (this.eventManager.ledger.allowance.payInPayMatrix *
        this.setting.daAllowancePer) /
        100
    );
    if (this.eventManager.ledger.employee.empType === 'TEACHING') {
      this.eventManager.ledger.allowance.specialAllow = Math.round(
        (this.eventManager.ledger.allowance.payInPayMatrix *
          this.setting.spclAllowancePer) /
          100
      );
    }
    this.updateGrossTotal();
  }

  setHRA(hra: number) {
    this.eventManager.ledger.allowance.hra = hra;
    this.updateGrossTotal();
  }

  calculateDAonTA(travelAllow: number) {
    this.eventManager.ledger.allowance.travelAllow = travelAllow;
    this.eventManager.ledger.allowance.daOnTravelAllow = Math.round(
      (this.eventManager.ledger.allowance.travelAllow *
        this.setting.daOnTrAllowancePer) /
        100
    );
    this.updateGrossTotal();
  }

  setHMA(houseMasterAllow: number) {
    this.eventManager.ledger.allowance.houseMasterAllow = houseMasterAllow;
    this.updateGrossTotal();
  }

  setCHA(cashHandlingAllow: number) {
    this.eventManager.ledger.allowance.cashHandlingAllow = cashHandlingAllow;
    this.updateGrossTotal();
  }

  setMgmtMs(npsMgmtShare: number) {
    this.eventManager.ledger.allowance.npsMgmtShare = npsMgmtShare;
    this.updateGrossTotal();
  }

  setOtherAllow(otherAllowance: number) {
    this.eventManager.ledger.allowance.otherAllowance = otherAllowance;
    this.updateGrossTotal();
  }

  private initSettings() {
    this.settingService.getSetting().subscribe((res) => {
      this.setting = res['data'];
    });
  }

  private updateGrossTotal() {
    this.eventManager.ledger.allowance.grossTotal =
      this.eventManager.ledger.allowance.payInPayMatrix +
      this.eventManager.ledger.allowance.dearnessAllow +
      this.eventManager.ledger.allowance.specialAllow +
      this.eventManager.ledger.allowance.hra +
      this.eventManager.ledger.allowance.travelAllow +
      this.eventManager.ledger.allowance.daOnTravelAllow +
      this.eventManager.ledger.allowance.houseMasterAllow +
      this.eventManager.ledger.allowance.cashHandlingAllow +
      this.eventManager.ledger.allowance.npsMgmtShare +
      this.eventManager.ledger.allowance.otherAllowance;
    this.eventManager.updateNetAmount();
  }
}
