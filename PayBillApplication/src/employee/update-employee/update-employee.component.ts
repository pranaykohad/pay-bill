import { Component, OnInit } from '@angular/core';
import { CPF, NPS, PREFIX_LIST, ROLE_LIST, TYPE_LIST } from 'src/app.constant';
import { ALERT_EVENTS } from 'src/global-enums';
import { Employee, IEmployee } from 'src/model/Emp';
import { DataSharingService } from 'src/service/data-sharing.service';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
})
export class UpdateEmployeeComponent implements OnInit {
  PREFIX_LIST = PREFIX_LIST;
  PENTION_SCHEME = [NPS, CPF];
  TYPE_LIST = TYPE_LIST;
  ROLE_LIST = ROLE_LIST;
  empList: IEmployee[];
  selectedEmp: IEmployee = null;

  constructor(
    private employeeService: EmployeeService,
    private dataSharing: DataSharingService
  ) {}

  ngOnInit(): void {
    this.employeeService.getAllEmp().subscribe((res) => {
      this.empList = res['data'];
    });
  }

  onOptionChangeHandler(seletedEmp: Employee) {
    this.selectedEmp = seletedEmp;
  }

  setPrefix(prefix: string) {
    this.selectedEmp.prefix = prefix;
  }

  setFirstName(firstName: string) {
    this.selectedEmp.firstName = firstName.toUpperCase();
  }

  setLastName(lastName: string) {
    this.selectedEmp.lastName = lastName.toUpperCase();
  }

  setShortName(shortName: string) {
    this.selectedEmp.shortName = shortName.toUpperCase();
  }

  setStaffCode(staffCode: string) {
    this.selectedEmp.staffCode = staffCode.toUpperCase();
  }

  setDesignation(designation: string) {
    this.selectedEmp.designation = designation.toUpperCase();
  }

  setLevel(level: number) {
    this.selectedEmp.level = level;
  }

  setPentionScheme(pentionScheme: string) {
    this.selectedEmp.pentionScheme = pentionScheme;
  }

  setNoOfPostSant(noOfPostSanctioned: number) {
    this.selectedEmp.noOfPostSanctioned = noOfPostSanctioned;
  }

  setStaffInPos(staffInPosition: number) {
    this.selectedEmp.staffInPosition = staffInPosition;
  }

  setType(empType: string) {
    this.selectedEmp.empType = empType;
  }

  setRole(role: string) {
    this.selectedEmp.role = role;
  }

  isSavedAllowed(): boolean {
    return (
      this.selectedEmp.firstName.trim().length > 0 &&
      this.selectedEmp.lastName.trim().length > 0 &&
      this.selectedEmp.shortName.trim().length > 0 &&
      this.selectedEmp.lastName.trim().length > 0 &&
      this.selectedEmp.staffCode.trim().length > 0 &&
      this.selectedEmp.designation.trim().length > 0 &&
      this.selectedEmp.noOfPostSanctioned > 0 &&
      this.selectedEmp.staffInPosition > 0
    );
  }

  addEmployee() {
    this.employeeService.saveEmployee(this.selectedEmp).subscribe((res) => {
      let message = null;
      message = this.buildAlertMessage(res, message);
      this.dataSharing.subject.next(message);
    });
  }

  private buildAlertMessage(res: IEmployee, message: any) {
    if (res['status'] === 'SUCCESS') {
      message = {
        name: ALERT_EVENTS.SUCCESS,
        content: 'Employee detail updated successfully',
      };
    } else {
      message = {
        name: ALERT_EVENTS.FAIL,
        content: 'Error while updating employee, please contact administrator',
      };
    }
    return message;
  }
}
