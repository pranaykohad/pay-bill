import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { SpinnerInterceptor } from 'src/interceptor/spinner.interceptor';
import { EmployeeService } from 'src/service/employee.service';
import { LedgerManager } from 'src/service/ledger-manager';
import { LedgerService } from 'src/service/ledger.service';
import { SettingService } from 'src/service/setting.service';
import { AboutComponent } from './about/about.component';
import { AllowanceComponent } from './allowance/allowance.component';
import { BusinessRoutingModule } from './business-routing.module';
import { CreatePayBillComponent } from './create-pay-bill/create-pay-bill.component';
import { CurrencyCommaPipe } from './currency-comma.pipe';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DeductionComponent } from './deduction/deduction.component';
import { GeneratePayBillComponent } from './generate-pay-bill/generate-pay-bill.component';
import { PreviewComponent } from './preview/preview.component';
import { SearchableDropdownComponent } from './searchable-dropdown/searchable-dropdown.component';
import { SettingsComponent } from './settings/settings.component';
import { UpperCasePipe } from './upper-case.pipe';

@NgModule({
  declarations: [
    CreatePayBillComponent,
    GeneratePayBillComponent,
    AboutComponent,
    DatePickerComponent,
    AllowanceComponent,
    DeductionComponent,
    SearchableDropdownComponent,
    SettingsComponent,
    PreviewComponent,
    CurrencyCommaPipe,
    UpperCasePipe,
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    NgbModule,
    FormsModule,
    DropdownModule,
    InputNumberModule,
    HttpClientModule,
  ],
  exports: [SearchableDropdownComponent],
  providers: [
    EmployeeService,
    LedgerService,
    LedgerManager,
    SettingService,
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
})
export class BusinessModule {}
