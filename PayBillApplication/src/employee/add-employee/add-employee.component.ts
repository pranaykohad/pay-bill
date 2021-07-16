import { Component } from '@angular/core';
import { ALERT_EVENTS } from 'src/global-enums';
import { Alert } from 'src/model/Alert';
import { DataSharingService } from 'src/service/data-sharing.service';
import { EmployeeService } from 'src/service/employee.service';
import {
  CPF,
  NPS,
  PREFIX_LIST,
  ROLE_LIST,
  TYPE_LIST,
} from '../../app.constant';
import { Employee, IEmployee } from './../../model/Emp';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent {
  PREFIX_LIST = PREFIX_LIST;
  PENTION_SCHEME = [NPS, CPF];
  TYPE_LIST = TYPE_LIST;
  ROLE_LIST = ROLE_LIST;
  employee: IEmployee;

  constructor(
    private employeeService: EmployeeService,
    private dataSharing: DataSharingService
  ) {
    this.initEmployee();
  }

  setPrefix(prefix: string) {
    this.employee.prefix = prefix;
  }

  setFirstName(firstName: string) {
    this.employee.firstName = firstName.toUpperCase();
  }

  setLastName(lastName: string) {
    this.employee.lastName = lastName.toUpperCase();
  }

  setShortName(shortName: string) {
    this.employee.shortName = shortName.toUpperCase();
  }

  setStaffCode(staffCode: string) {
    this.employee.staffCode = staffCode.toUpperCase();
  }

  setDesignation(designation: string) {
    this.employee.designation = designation.toUpperCase();
  }

  setLevel(level: number) {
    this.employee.level = level;
  }

  setPentionScheme(pentionScheme: string) {
    this.employee.pentionScheme = pentionScheme;
  }

  setNoOfPostSant(noOfPostSanctioned: number) {
    this.employee.noOfPostSanctioned = noOfPostSanctioned;
  }

  setStaffInPos(staffInPosition: number) {
    this.employee.staffInPosition = staffInPosition;
  }

  setType(empType: string) {
    this.employee.empType = empType;
  }

  setRole(role: string) {
    this.employee.role = role;
  }

  addEmployee() {
    this.employeeService.saveEmployee(this.employee).subscribe((res) => {
      let message = null;
      message = this.buildAlertMessage(res, message);
      this.dataSharing.subject.next(message);
    });
  }

  isSavedAllowed(): boolean {
    return (
      this.employee.firstName.trim().length > 0 &&
      this.employee.lastName.trim().length > 0 &&
      this.employee.shortName.trim().length > 0 &&
      this.employee.lastName.trim().length > 0 &&
      this.employee.staffCode.trim().length > 0 &&
      this.employee.designation.trim().length > 0 &&
      this.employee.noOfPostSanctioned > 0 &&
      this.employee.staffInPosition > 0
    );
  }

  private buildAlertMessage(res: IEmployee, message: any): Alert {
    if (res['status'] === 'SUCCESS') {
      message = {
        name: ALERT_EVENTS.SUCCESS,
        content: 'Employee saved successfully',
      };
    } else {
      message = {
        name: ALERT_EVENTS.FAIL,
        content: 'Error while saving employee, please contact administrator',
      };
    }
    return message;
  }

  private initEmployee() {
    this.employee = new Employee();
    this.employee.prefix = 'MR.';
    this.employee.pentionScheme = 'NPS';
    this.employee.role = 'NORMAL';
    this.employee.empType = 'TEACHING';
    this.employee.noOfPostSanctioned = 0;
    this.employee.staffInPosition = 0;
    this.employee.firstName = '';
    this.employee.lastName = '';
    this.employee.shortName = '';
    this.employee.staffCode = '';
    this.employee.designation = '';
    this.employee.level = 0;
  }
}
