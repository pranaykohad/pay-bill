import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreatePayBillComponent } from './create-pay-bill/create-pay-bill.component';
import { GeneratePayBillComponent } from './generate-pay-bill/generate-pay-bill.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-pay-bill',
  },
  {
    path: 'add-pay-bill',
    component: CreatePayBillComponent,
  },
  {
    path: 'get-pay-bill',
    component: GeneratePayBillComponent,
  },
  {
    path: 'setting',
    component: SettingsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('../employee/employee.module').then((mod) => mod.EmployeeModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}
