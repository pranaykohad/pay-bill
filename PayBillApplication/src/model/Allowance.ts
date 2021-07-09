import { Ledger } from './Ledger';

export interface IAllowance {
  allowanceId: number;
  payInPayMatrix: number;
  da17Per: number;
  spclAllow10Per: number;
  hra: number;
  travelAllow: number;
  daOnTA17Per: number;
  houseMasterAllow: number;
  cashHandlingAllow: number;
  npsMgmtShare10Per: number;
  otherAllowance: number;
  grossTotal: number;
  ledger: Ledger;
}
export class Allowance implements IAllowance {
  allowanceId: number;
  payInPayMatrix: number;
  da17Per: number;
  spclAllow10Per: number;
  hra: number;
  travelAllow: number;
  daOnTA17Per: number;
  houseMasterAllow: number;
  cashHandlingAllow: number;
  npsMgmtShare10Per: number;
  otherAllowance: number;
  grossTotal: number;
  ledger: Ledger;
}
