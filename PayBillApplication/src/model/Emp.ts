import { Ledger } from './Ledger';

export interface IEmployee {
  empId: number;
  firstName: string;
  lastName: string;
  shortName: string;
  prefix: string;
  staffCode: string;
  designation: string;
  level: number;
  pentionScheme: string;
  noOfPostSanctioned: number;
  staffInPosition: number;
  role: string;
  empType: string;
  ledgerList: Ledger;
}

export class Employee implements IEmployee {
  noOfPostSanctioned: number;
  staffInPosition: number;
  empId: number;
  firstName: string;
  lastName: string;
  shortName: string;
  prefix: string;
  staffCode: string;
  designation: string;
  level: number;
  pentionScheme: string;
  role: string;
  empType: string;
  ledgerList: Ledger;
}
