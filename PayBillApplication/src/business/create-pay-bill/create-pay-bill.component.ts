import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ledger } from 'src/model/Ledger';
import { EmployeeService } from 'src/service/employee.service';
import { LedgerService } from 'src/service/ledger.service';
import { LedgerManager } from '../../service/ledger-manager';
import { DatePicker } from './../../model/DatePicker';
import { Employee } from './../../model/Emp';
import { UtilService } from './../../service/util.service';

@Component({
  selector: 'app-create-pay-bill',
  templateUrl: './create-pay-bill.component.html',
  styleUrls: ['./create-pay-bill.component.scss'],
})
export class CreatePayBillComponent implements OnInit, OnDestroy {
  empList: Employee[];
  private subscription: Subscription = new Subscription();

  constructor(
    private utilService: UtilService,
    public ledgerMgr: LedgerManager,
    private employeeService: EmployeeService,
    private ledgerService: LedgerService
  ) {
    this.empList = [];
    this.ledgerMgr.ledger = new Ledger();
    this.ledgerMgr.ledger.employee = new Employee();
    this.ledgerMgr.ledger.noOfDays = null;
    this.ledgerMgr.initLedger();
  }

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
    this.ledgerMgr.ledger.employee = seletedEmp;
    this.ledgerMgr.ledger.noOfDays = null;
    this.ledgerMgr.initLedger();
  }

  dateEmitHandler(selectedDate: DatePicker) {
    this.ledgerMgr.ledger.date = this.utilService.formatDate(selectedDate);
    this.ledgerMgr.ledger.noOfDays = this.utilService.daysInMonth(
      selectedDate.month,
      selectedDate.year
    );
    this.getPayBill();
  }

  private getPayBill() {
    this.subscription.add(
      this.ledgerService
        .getPayBill(
          this.ledgerMgr.ledger.employee.empId,
          this.ledgerMgr.ledger.date
        )
        .subscribe((res) => {
          if (res['data']) {
            this.ledgerMgr.ledger = res['data'];
          } else {
            this.ledgerMgr.ledger.ledgerId = null;
            this.ledgerMgr.initLedger();
            this.ledgerMgr.initSettings();
          }
        })
    );
  }
}
