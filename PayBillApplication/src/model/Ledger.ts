import { Allowance } from './Allowance';
import { Deduction } from './Deduction';
import { Employee } from './Emp';

export interface ILedger {
  ledgerId: number;
  date: string;
  noOfDays: number;
  netAmount: number;
  allowance: Allowance;
  deduction: Deduction;
  employee: Employee;
  daAllowancePer: number;
  spclAllowancePer: number;
  daOnTrAllowancePer: number;
}

export class Ledger implements ILedger {
  ledgerId: number;
  date: string;
  noOfDays: number;
  netAmount: number;
  allowance: Allowance;
  deduction: Deduction;
  employee: Employee;
  daAllowancePer: number;
  spclAllowancePer: number;
  daOnTrAllowancePer: number;
}
