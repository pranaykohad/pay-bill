import { Component, OnInit } from '@angular/core';
import { Ledger } from 'src/model/Ledger';
import { EmployeeService } from 'src/service/employee.service';
import { LedgerService } from 'src/service/ledger.service';
import { DatePicker } from './../../model/DatePicker';
import { Employee } from './../../model/Emp';
import { EventManager } from './../../service/event-manager';
import { UtilService } from './../../service/util.service';

@Component({
  selector: 'app-create-pay-bill',
  templateUrl: './create-pay-bill.component.html',
  styleUrls: ['./create-pay-bill.component.scss'],
})
export class CreatePayBillComponent implements OnInit {
  empList: Employee[];

  constructor(
    private utilService: UtilService,
    public eventManager: EventManager,
    private employeeService: EmployeeService,
    private ledgerService: LedgerService
  ) {
    this.empList = [];
    this.eventManager.ledger = new Ledger();
    this.eventManager.ledger.employee = new Employee();
    this.eventManager.ledger.noOfDays = null;
    this.eventManager.initLedger();
  }

  ngOnInit(): void {
    this.employeeService.getAllEmp().subscribe((res) => {
      this.empList = res['data'];
    });
  }

  onOptionChangeHandler(seletedEmp: Employee) {
    this.eventManager.ledger.employee = seletedEmp;
    this.eventManager.ledger.noOfDays = null;
    this.eventManager.initLedger();
  }

  dateEmitHandler(selectedDate: DatePicker) {
    this.eventManager.ledger.date = this.utilService.formatDate(selectedDate);
    this.eventManager.ledger.noOfDays = this.utilService.daysInMonth(
      selectedDate.month,
      selectedDate.year
    );
    this.getPayBill();
  }

  private getPayBill() {
    this.ledgerService
      .getPayBill(
        this.eventManager.ledger.employee.empId,
        this.eventManager.ledger.date
      )
      .subscribe((res) => {
        if (res['data']) {
          this.eventManager.ledger = res['data'];
        } else {
          this.eventManager.ledger.ledgerId = null;
          this.eventManager.initLedger();
        }
      });
  }
}
