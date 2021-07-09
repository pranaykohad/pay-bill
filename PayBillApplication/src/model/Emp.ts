import { Ledger } from './Ledger';

export interface IEmployee {
  empId: number;
  empName: string;
  prefix: string;
  staffCode: string;
  designation: string;
  level: number;
  pentionScheme: string;
  noOfPostSanctioned: number;
  staffInPosition: number;
  ledgerList: Ledger[];
}

export class Employee implements IEmployee {
  noOfPostSanctioned: number;
  staffInPosition: number;
  empId: number;
  empName: string;
  prefix: string;
  staffCode: string;
  designation: string;
  level: number;
  pentionScheme: string;
  ledgerList: Ledger[];
}
