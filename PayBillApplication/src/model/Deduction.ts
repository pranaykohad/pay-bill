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
  incomeTax: number;
  professionalTax: number;
  waterElectricCharges: number;
  otherDeduction1: number;
  otherDeduction2: number;
  totalDeduction: number;
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
  incomeTax: number;
  professionalTax: number;
  waterElectricCharges: number;
  otherDeduction1: number;
  otherDeduction2: number;
  totalDeduction: number;
}
