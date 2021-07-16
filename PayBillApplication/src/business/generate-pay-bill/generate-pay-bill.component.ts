import { Component, OnInit } from '@angular/core';
import { Allowance } from 'src/model/Allowance';
import { DatePicker } from 'src/model/DatePicker';
import { Deduction } from 'src/model/Deduction';
import { Employee, IEmployee } from 'src/model/Emp';
import { ILedger, Ledger } from 'src/model/Ledger';
import { ISetting, Setting } from 'src/model/Setting';
import { EmployeeService } from 'src/service/employee.service';
import { LedgerService } from 'src/service/ledger.service';
import { SettingService } from 'src/service/setting.service';
import { UtilService } from 'src/service/util.service';

@Component({
  selector: 'app-generate-pay-bill',
  templateUrl: './generate-pay-bill.component.html',
  styleUrls: ['./generate-pay-bill.component.scss'],
})
export class GeneratePayBillComponent implements OnInit {
  empList: Employee[];
  selectedEmp: IEmployee;
  noOfDays: number;
  selectedDate: string;
  ledger: ILedger;
  userMsg = 'Please select Employee and date';
  setting: ISetting;

  constructor(
    private utilService: UtilService,
    private employeeService: EmployeeService,
    private ledgerService: LedgerService,
    private settingService: SettingService
  ) {
    this.empList = [];
    this.selectedEmp = new Employee();
    this.ledger = new Ledger();
    this.setting = new Setting();
    this.setting.daAllowancePer = 17;
    this.setting.spclAllowancePer = 10;
    this.setting.daOnTrAllowancePer = 17;
    this.initAllowance();
    this.initDeduction();
    this.initSettings();
  }

  ngOnInit(): void {
    this.employeeService.getAllEmp().subscribe((res) => {
      this.empList = res['data'];
    });
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
    this.ledgerService
      .getPayBill(this.selectedEmp.empId, this.selectedDate)
      .subscribe((res) => {
        if (res['data']) {
          this.ledger = res['data'];
        } else {
          this.noOfDays = null;
          this.userMsg = 'No Record Found';
        }
      });
  }

  downloadPayBill() {}

  private initSettings() {
    this.settingService.getSetting().subscribe((res) => {
      this.setting = res['data'];
    });
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
