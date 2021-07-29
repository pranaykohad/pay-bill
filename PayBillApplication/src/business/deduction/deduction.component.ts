import { Component } from '@angular/core';
import { CPF, NPS } from 'src/app.constant';
import { LedgerManager } from 'src/service/ledger-manager';

@Component({
  selector: 'app-deduction',
  templateUrl: './deduction.component.html',
})
export class DeductionComponent {
  NPS = NPS;
  CPF = CPF;
  constructor(public ledgerMgr: LedgerManager) {}

  setCpfSubs(cpfSubs: number) {
    this.ledgerMgr.ledger.deduction.cpfSubs = cpfSubs;
    this.updateTotalDeduction();
  }

  setCpfArrears(cpfArrears: number) {
    this.ledgerMgr.ledger.deduction.cpfArrears = cpfArrears;
    this.updateTotalDeduction();
  }

  setCpfAdvance(cpfAdvance: number) {
    this.ledgerMgr.ledger.deduction.cpfAdvance = cpfAdvance;
    this.updateTotalDeduction();
  }

  setNoOfInstall(noOfInstall: string) {
    this.ledgerMgr.ledger.deduction.noOfInstall = noOfInstall;
  }

  setGslis(gslis: number) {
    this.ledgerMgr.ledger.deduction.gslis = gslis;
    this.updateTotalDeduction();
  }

  setNpsMgmtShare(npsMgmtShare: number) {
    this.ledgerMgr.ledger.deduction.npsMgmtShare = npsMgmtShare;
    this.updateTotalDeduction();
  }

  setNpsOwnShare(npsOwnShare: number) {
    this.ledgerMgr.ledger.deduction.npsOwnShare = npsOwnShare;
    this.updateTotalDeduction();
  }

  setNpsMgmtShareArrears(npsMgmtShareArrears: number) {
    this.ledgerMgr.ledger.deduction.npsMgmtShareArrears = npsMgmtShareArrears;
    this.updateTotalDeduction();
  }

  setNpsOwnsArrears(npsOsArrears: number) {
    this.ledgerMgr.ledger.deduction.npsOsArrears = npsOsArrears;
    this.updateTotalDeduction();
  }

  setIncomeTax(incomeTax: number) {
    this.ledgerMgr.ledger.deduction.incomeTax = incomeTax;
    this.updateTotalDeduction();
  }

  setProfessionalTax(professionalTax: number) {
    this.ledgerMgr.ledger.deduction.professionalTax = professionalTax;
    this.updateTotalDeduction();
  }

  setWaterElectricCharges(waterElectricCharges: number) {
    this.ledgerMgr.ledger.deduction.waterElectricCharges = waterElectricCharges;
    this.updateTotalDeduction();
  }

  setOthersDeduction1(othersDeduction1: number) {
    this.ledgerMgr.ledger.deduction.otherDeduction1 = othersDeduction1;
    this.updateTotalDeduction();
  }

  setOthersDeduction2(othersDeduction2: number) {
    this.ledgerMgr.ledger.deduction.otherDeduction2 = othersDeduction2;
    this.updateTotalDeduction();
  }

  private updateTotalDeduction() {
    this.ledgerMgr.ledger.deduction.totalDeduction =
      this.ledgerMgr.ledger.deduction.cpfSubs +
      this.ledgerMgr.ledger.deduction.cpfArrears +
      this.ledgerMgr.ledger.deduction.cpfAdvance +
      this.ledgerMgr.ledger.deduction.gslis +
      this.ledgerMgr.ledger.deduction.npsMgmtShare +
      this.ledgerMgr.ledger.deduction.npsOwnShare +
      this.ledgerMgr.ledger.deduction.npsMgmtShareArrears +
      this.ledgerMgr.ledger.deduction.npsOsArrears +
      this.ledgerMgr.ledger.deduction.incomeTax +
      this.ledgerMgr.ledger.deduction.professionalTax +
      this.ledgerMgr.ledger.deduction.waterElectricCharges +
      this.ledgerMgr.ledger.deduction.otherDeduction1 +
      this.ledgerMgr.ledger.deduction.otherDeduction2;
    this.ledgerMgr.updateNetAmount();
  }
}
