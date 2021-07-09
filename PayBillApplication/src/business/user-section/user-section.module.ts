import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSectionComponent } from './user-section.component';
import { UserSectionRoutingModule } from './user-section-routing.module';

@NgModule({
  declarations: [UserSectionComponent],
  imports: [CommonModule, UserSectionRoutingModule],
})
export class UserSectionModule {}
