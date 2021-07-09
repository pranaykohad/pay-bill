import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreatePayBillComponent } from './create-pay-bill/create-pay-bill.component';
import { GeneratePayBillComponent } from './generate-pay-bill/generate-pay-bill.component';

const routes: Routes = [
  {
    path: '',
    component: CreatePayBillComponent,
  },
  {
    path: 'get-pay-bill',
    component: GeneratePayBillComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user-section/user-section.module').then(
        (mod) => mod.UserSectionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}
