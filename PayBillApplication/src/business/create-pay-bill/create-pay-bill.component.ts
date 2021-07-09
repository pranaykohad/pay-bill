import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PREFIX_LIST } from 'src/app.constant';
import { ILedger } from 'src/model/Ledger';
import { Employee, IEmployee } from './../../model/Emp';

@Component({
  selector: 'app-create-pay-bill',
  templateUrl: './create-pay-bill.component.html',
  styleUrls: ['./create-pay-bill.component.scss'],
})
export class CreatePayBillComponent implements OnInit {
  ledger: ILedger;
  emp: IEmployee;
  PREFIX_LIST = PREFIX_LIST;
  active = 1;
  items: MenuItem[];
  activeItem: MenuItem;

  constructor() {}

  ngOnInit(): void {
    this.emp = new Employee();
    this.emp.staffCode = '321615611';
    this.emp.empName = 'A.T. KOHAD';
    this.emp.prefix = 'SHREE';
    this.emp.designation = 'PRINCIPAL';
    this.emp.level = 12;

    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' },
    ];

    this.activeItem = this.items[0];
  }

  savePayBill() {}
}
