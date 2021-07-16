export interface IAllowance {
  allowanceId: number;
  payInPayMatrix: number;
  dearnessAllow: number;
  specialAllow: number;
  hra: number;
  travelAllow: number;
  daOnTravelAllow: number;
  houseMasterAllow: number;
  cashHandlingAllow: number;
  npsMgmtShare: number;
  otherAllowance: number;
  grossTotal: number;
}
export class Allowance implements IAllowance {
  allowanceId: number;
  payInPayMatrix: number;
  dearnessAllow: number;
  specialAllow: number;
  hra: number;
  travelAllow: number;
  daOnTravelAllow: number;
  houseMasterAllow: number;
  cashHandlingAllow: number;
  npsMgmtShare: number;
  otherAllowance: number;
  grossTotal: number;
}
