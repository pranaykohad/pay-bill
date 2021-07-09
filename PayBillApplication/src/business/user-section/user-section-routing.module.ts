import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSectionComponent } from './user-section.component';

const routes: Routes = [
  {
    path: '',
    component: UserSectionComponent,
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
export class UserSectionRoutingModule {}
