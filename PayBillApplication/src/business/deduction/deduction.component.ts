import { Component } from '@angular/core';
import { CPF, NPS } from 'src/app.constant';
import { EventManager } from 'src/service/event-manager';

@Component({
  selector: 'app-deduction',
  templateUrl: './deduction.component.html',
})
export class DeductionComponent {
  NPS = NPS;
  CPF = CPF;
  constructor(public eventManager: EventManager) {}

  setCpfSubs(cpfSubs: number) {
    this.eventManager.ledger.deduction.cpfSubs = cpfSubs;
    this.updateTotalDeduction();
  }

  setCpfArrears(cpfArrears: number) {
    this.eventManager.ledger.deduction.cpfArrears = cpfArrears;
    this.updateTotalDeduction();
  }

  setCpfAdvance(cpfAdvance: number) {
    this.eventManager.ledger.deduction.cpfAdvance = cpfAdvance;
    this.updateTotalDeduction();
  }

  setNoOfInstall(noOfInstall: string) {
    this.eventManager.ledger.deduction.noOfInstall = noOfInstall;
  }

  setGslis(gslis: number) {
    this.eventManager.ledger.deduction.gslis = gslis;
    this.updateTotalDeduction();
  }

  setNpsMgmtShare(npsMgmtShare: number) {
    this.eventManager.ledger.deduction.npsMgmtShare = npsMgmtShare;
    this.updateTotalDeduction();
  }

  setNpsOwnShare(npsOwnShare: number) {
    this.eventManager.ledger.deduction.npsOwnShare = npsOwnShare;
    this.updateTotalDeduction();
  }

  setNpsMgmtShareArrears(npsMgmtShareArrears: number) {
    this.eventManager.ledger.deduction.npsMgmtShareArrears =
      npsMgmtShareArrears;
    this.updateTotalDeduction();
  }

  setNpsOwnsArrears(npsOsArrears: number) {
    this.eventManager.ledger.deduction.npsOsArrears = npsOsArrears;
    this.updateTotalDeduction();
  }

  setIncomeTax(incomeTax: number) {
    this.eventManager.ledger.deduction.incomeTax = incomeTax;
    this.updateTotalDeduction();
  }

  setProfessionalTax(professionalTax: number) {
    this.eventManager.ledger.deduction.professionalTax = professionalTax;
    this.updateTotalDeduction();
  }

  setWaterElectricCharges(waterElectricCharges: number) {
    this.eventManager.ledger.deduction.waterElectricCharges =
      waterElectricCharges;
    this.updateTotalDeduction();
  }

  setOthersDeduction1(othersDeduction1: number) {
    this.eventManager.ledger.deduction.otherDeduction1 = othersDeduction1;
    this.updateTotalDeduction();
  }

  setOthersDeduction2(othersDeduction2: number) {
    this.eventManager.ledger.deduction.otherDeduction2 = othersDeduction2;
    this.updateTotalDeduction();
  }

  private updateTotalDeduction() {
    this.eventManager.ledger.deduction.totalDeduction =
      this.eventManager.ledger.deduction.cpfSubs +
      this.eventManager.ledger.deduction.cpfArrears +
      this.eventManager.ledger.deduction.cpfAdvance +
      this.eventManager.ledger.deduction.gslis +
      this.eventManager.ledger.deduction.npsMgmtShare +
      this.eventManager.ledger.deduction.npsOwnShare +
      this.eventManager.ledger.deduction.npsMgmtShareArrears +
      this.eventManager.ledger.deduction.npsOsArrears +
      this.eventManager.ledger.deduction.incomeTax +
      this.eventManager.ledger.deduction.professionalTax +
      this.eventManager.ledger.deduction.waterElectricCharges +
      this.eventManager.ledger.deduction.otherDeduction1 +
      this.eventManager.ledger.deduction.otherDeduction2;
    this.eventManager.updateNetAmount();
  }
}
