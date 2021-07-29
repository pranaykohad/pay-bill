import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ALERT_EVENTS } from 'src/global-enums';
import { Allowance } from 'src/model/Allowance';
import { DatePicker } from 'src/model/DatePicker';
import { Deduction } from 'src/model/Deduction';
import { Employee, IEmployee } from 'src/model/Emp';
import { ILedger, Ledger } from 'src/model/Ledger';
import { DataSharingService } from 'src/service/data-sharing.service';
import { EmployeeService } from 'src/service/employee.service';
import { LedgerService } from 'src/service/ledger.service';
import { UtilService } from 'src/service/util.service';
import { Attachment } from './../../model/Attachment';

@Component({
  selector: 'app-generate-pay-bill',
  templateUrl: './generate-pay-bill.component.html',
  styleUrls: ['./generate-pay-bill.component.scss'],
})
export class GeneratePayBillComponent implements OnInit, OnDestroy {
  empList: Employee[];
  selectedEmp: IEmployee;
  noOfDays: number;
  selectedDate: string;
  ledger: ILedger;
  userMsg = 'Please select Employee and date';
  private subscription: Subscription = new Subscription();

  constructor(
    private utilService: UtilService,
    private employeeService: EmployeeService,
    private ledgerService: LedgerService,
    private dataSharing: DataSharingService
  ) {
    this.empList = [];
    this.selectedEmp = new Employee();
    this.ledger = new Ledger();
    this.initAllowance();
    this.initDeduction();
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
    this.selectedEmp = seletedEmp;
    this.noOfDays = null;
    this.initAllowance();
    this.initDeduction();
    this.userMsg = 'Please select Employee and date';
  }

  dateEmitHandler(selectedDate: DatePicker) {
    this.selectedDate = this.utilService.formatDate(selectedDate);
    this.noOfDays = this.utilService.daysInMonth(
      selectedDate.month,
      selectedDate.year
    );
    this.getPayBill();
  }

  getPayBill() {
    this.subscription.add(
      this.ledgerService
        .getPayBill(this.selectedEmp.empId, this.selectedDate)
        .subscribe((res) => {
          if (res['data']) {
            this.ledger = res['data'];
          } else {
            this.noOfDays = null;
            this.userMsg = 'No Record Found';
          }
        })
    );
  }

  downloadPayBill() {
    this.subscription.add(
      this.ledgerService.downloadPayBill(this.ledger).subscribe((res) => {
        if (res['data']) {
          const attachment: Attachment = new Attachment(
            res['data'].filename,
            res['data'].fileContent,
            res['data'].mimeType
          );
          this.utilService.downloadFile(attachment);
          let message = null;
          message = this.buildAlertMessage(res, message);
          this.dataSharing.subject.next(message);
        } else {
          this.noOfDays = null;
          this.userMsg = 'No Record Found';
        }
      })
    );
  }

  private buildAlertMessage(res: Attachment, message: any) {
    if (res['status'] === 'SUCCESS') {
      message = {
        name: ALERT_EVENTS.SUCCESS,
        content: 'PDF downloaded successfully',
      };
    } else {
      message = {
        name: ALERT_EVENTS.FAIL,
        content: 'Error while downloading PDF, please contact administrator',
      };
    }
    return message;
  }

  private initAllowance() {
    this.ledger.allowance = new Allowance();
    this.ledger.allowance.payInPayMatrix = 0;
    this.ledger.allowance.dearnessAllow = 0;
    this.ledger.allowance.specialAllow = 0;
    this.ledger.allowance.hra = 0;
    this.ledger.allowance.travelAllow = 0;
    this.ledger.allowance.daOnTravelAllow = 0;
    this.ledger.allowance.houseMasterAllow = 0;
    this.ledger.allowance.cashHandlingAllow = 0;
    this.ledger.allowance.npsMgmtShare = 0;
    this.ledger.allowance.otherAllowance = 0;
    this.ledger.allowance.grossTotal = 0;
  }

  private initDeduction() {
    this.ledger.deduction = new Deduction();
    this.ledger.deduction.cpfSubs = 0;
    this.ledger.deduction.cpfArrears = 0;
    this.ledger.deduction.cpfAdvance = 0;
    this.ledger.deduction.noOfInstall = '';
    this.ledger.deduction.gslis = 0;
    this.ledger.deduction.npsMgmtShare = 0;
    this.ledger.deduction.npsOwnShare = 0;
    this.ledger.deduction.npsMgmtShareArrears = 0;
    this.ledger.deduction.npsOsArrears = 0;
    this.ledger.deduction.incomeTax = 0;
    this.ledger.deduction.professionalTax = 0;
    this.ledger.deduction.waterElectricCharges = 0;
    this.ledger.deduction.otherDeduction1 = 0;
    this.ledger.deduction.otherDeduction2 = 0;
    this.ledger.deduction.totalDeduction = 0;
  }
}
