import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { AllowanceComponent } from './allowance/allowance.component';
import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import { CreatePayBillComponent } from './create-pay-bill/create-pay-bill.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DeductionComponent } from './deduction/deduction.component';
import { GeneratePayBillComponent } from './generate-pay-bill/generate-pay-bill.component';
import { SearchableDropdownComponent } from './searchable-dropdown/searchable-dropdown.component';

@NgModule({
  declarations: [
    BusinessComponent,
    CreatePayBillComponent,
    GeneratePayBillComponent,
    AboutComponent,
    DatePickerComponent,
    AllowanceComponent,
    DeductionComponent,
    SearchableDropdownComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    BusinessRoutingModule,
    NgbModule,
    FormsModule,
  ],
})
export class BusinessModule {}
