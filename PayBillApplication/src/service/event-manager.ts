import { Employee } from 'src/model/Emp';
import { Injectable } from '@angular/core';
import { Allowance } from 'src/model/Allowance';
import { Deduction } from 'src/model/Deduction';
import { ILedger, Ledger } from 'src/model/Ledger';

@Injectable({
  providedIn: 'root',
})
export class EventManager {
  ledger: ILedger;

  constructor() {
    this.ledger = new Ledger();
    this.ledger.employee = new Employee();
    this.ledger.noOfDays = null;
    this.initLedger();
  }

  initLedger() {
    this.ledger.netAmount = 0;
    this.initAllowance();
    this.initDeduction();
  }

  initAllowance() {
    this.ledger.allowance = new Allowance();
    this.ledger.allowance.payInPayMatrix = 0;
    this.ledger.allowance.dearnessAllow = 0;
    this.ledger.allowance.specialAllow = 0;
    this.ledger.allowance.hra = 0;
    this.ledger.allowance.travelAllow = 0;
    this.ledger.allowance.daOnTravelAllow = 0;
    this.ledger.allowance.houseMasterAllow = 0;
    this.ledger.allowance.cashHandlingAllow = 0;
    this.ledger.allowance.npsMgmtShare = 0;
    this.ledger.allowance.otherAllowance = 0;
    this.ledger.allowance.grossTotal = 0;
  }

  initDeduction() {
    this.ledger.deduction = new Deduction();
    this.ledger.deduction.cpfSubs = 0;
    this.ledger.deduction.cpfArrears = 0;
    this.ledger.deduction.cpfAdvance = 0;
    this.ledger.deduction.noOfInstall = '';
    this.ledger.deduction.gslis = 0;
    this.ledger.deduction.npsMgmtShare = 0;
    this.ledger.deduction.npsOwnShare = 0;
    this.ledger.deduction.npsMgmtShareArrears = 0;
    this.ledger.deduction.npsOsArrears = 0;
    this.ledger.deduction.incomeTax = 0;
    this.ledger.deduction.professionalTax = 0;
    this.ledger.deduction.waterElectricCharges = 0;
    this.ledger.deduction.otherDeduction1 = 0;
    this.ledger.deduction.otherDeduction2 = 0;
    this.ledger.deduction.totalDeduction = 0;
  }

  updateNetAmount() {
    this.ledger.netAmount =
      this.ledger.allowance.grossTotal - this.ledger.deduction.totalDeduction;
  }
}
