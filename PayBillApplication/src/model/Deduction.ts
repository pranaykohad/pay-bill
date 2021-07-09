import { Ledger } from './Ledger';
export interface IDeduction {
  deductionId: number;
  cpfSubs: number;
  cpfArrears: number;
  cpfAdvance: number;
  noOfInstall: string;
  gslis: number;
  npsMgmtShare: number;
  npsOwnShare: number;
  npsMgmtShareArrears: number;
  npsOsArrears: number;
  incomeTaxProfTax: number;
  waterElectricCharges: number;
  othersDeduction1: number;
  othersDeduction2: number;
  totalDeduction: number;
  ledger: Ledger;
}

export class Deduction implements IDeduction {
  deductionId: number;
  cpfSubs: number;
  cpfArrears: number;
  cpfAdvance: number;
  noOfInstall: string;
  gslis: number;
  npsMgmtShare: number;
  npsOwnShare: number;
  npsMgmtShareArrears: number;
  npsOsArrears: number;
  incomeTaxProfTax: number;
  waterElectricCharges: number;
  othersDeduction1: number;
  othersDeduction2: number;
  totalDeduction: number;
  ledger: Ledger;
}
