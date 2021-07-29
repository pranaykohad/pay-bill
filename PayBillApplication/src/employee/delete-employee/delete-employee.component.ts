import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ALERT_EVENTS } from 'src/global-enums';
import { Employee, IEmployee } from 'src/model/Emp';
import { DataSharingService } from 'src/service/data-sharing.service';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
})
export class DeleteEmployeeComponent implements OnInit, OnDestroy {
  empList: IEmployee[];
  selectedEmp: IEmployee = null;
  private subscription: Subscription = new Subscription();

  constructor(
    private employeeService: EmployeeService,
    private dataSharing: DataSharingService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.employeeService.getAllEmp().subscribe((res) => {
        this.empList = res['data'];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onOptionChangeHandler(seletedEmp: Employee) {
    this.selectedEmp = seletedEmp;
  }

  deleteEmployee() {
    this.subscription.add(
      this.employeeService.deleteEmployee(this.selectedEmp).subscribe((res) => {
        let message = null;
        message = this.buildAlertMessage(res, message);
        this.dataSharing.subject.next(message);
      })
    );
  }

  private buildAlertMessage(res: IEmployee, message: any) {
    if (res['status'] === 'SUCCESS') {
      this.empList = this.empList.filter((emp) => {
        return emp.empId !== this.selectedEmp.empId;
      });
      this.selectedEmp = null;
      message = {
        name: ALERT_EVENTS.SUCCESS,
        content: 'Employee deleted successfully',
      };
    } else {
      message = {
        name: ALERT_EVENTS.FAIL,
        content: 'Error while deleting employee, please contact administrator',
      };
    }
    return message;
  }
}
