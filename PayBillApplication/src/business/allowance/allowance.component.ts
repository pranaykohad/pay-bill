import { Component } from '@angular/core';
import { LedgerManager } from 'src/service/ledger-manager';

@Component({
  selector: 'app-allowance',
  templateUrl: './allowance.component.html',
  styleUrls: ['./allowance.component.scss'],
})
export class AllowanceComponent {
  constructor(public ledgerMgr: LedgerManager) {}

  calculateOtherFields(matrix: number) {
    this.ledgerMgr.ledger.allowance.payInPayMatrix = matrix;
    this.ledgerMgr.ledger.allowance.dearnessAllow = Math.round(
      (this.ledgerMgr.ledger.allowance.payInPayMatrix *
        this.ledgerMgr.ledger.daAllowancePer) /
        100
    );
    if (this.ledgerMgr.ledger.employee.empType === 'TEACHING') {
      this.ledgerMgr.ledger.allowance.specialAllow = Math.round(
        (this.ledgerMgr.ledger.allowance.payInPayMatrix *
          this.ledgerMgr.ledger.spclAllowancePer) /
          100
      );
    }
    this.updateGrossTotal();
  }

  setHRA(hra: number) {
    this.ledgerMgr.ledger.allowance.hra = hra;
    this.updateGrossTotal();
  }

  calculateDAonTA(travelAllow: number) {
    this.ledgerMgr.ledger.allowance.travelAllow = travelAllow;
    this.ledgerMgr.ledger.allowance.daOnTravelAllow = Math.round(
      (this.ledgerMgr.ledger.allowance.travelAllow *
        this.ledgerMgr.ledger.daOnTrAllowancePer) /
        100
    );
    this.updateGrossTotal();
  }

  setHMA(houseMasterAllow: number) {
    this.ledgerMgr.ledger.allowance.houseMasterAllow = houseMasterAllow;
    this.updateGrossTotal();
  }

  setCHA(cashHandlingAllow: number) {
    this.ledgerMgr.ledger.allowance.cashHandlingAllow = cashHandlingAllow;
    this.updateGrossTotal();
  }

  setMgmtMs(npsMgmtShare: number) {
    this.ledgerMgr.ledger.allowance.npsMgmtShare = npsMgmtShare;
    this.updateGrossTotal();
  }

  setOtherAllow(otherAllowance: number) {
    this.ledgerMgr.ledger.allowance.otherAllowance = otherAllowance;
    this.updateGrossTotal();
  }

  resetAllowance() {
    this.ledgerMgr.initAllowance();
    this.ledgerMgr.updateNetAmount();
  }

  private updateGrossTotal() {
    this.ledgerMgr.ledger.allowance.grossTotal =
      this.ledgerMgr.ledger.allowance.payInPayMatrix +
      this.ledgerMgr.ledger.allowance.dearnessAllow +
      this.ledgerMgr.ledger.allowance.specialAllow +
      this.ledgerMgr.ledger.allowance.hra +
      this.ledgerMgr.ledger.allowance.travelAllow +
      this.ledgerMgr.ledger.allowance.daOnTravelAllow +
      this.ledgerMgr.ledger.allowance.houseMasterAllow +
      this.ledgerMgr.ledger.allowance.cashHandlingAllow +
      this.ledgerMgr.ledger.allowance.npsMgmtShare +
      this.ledgerMgr.ledger.allowance.otherAllowance;
    this.ledgerMgr.updateNetAmount();
  }
}
