import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgressBarModule } from 'primeng/progressbar';
import { AlertModule } from './../alert/alert.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [MainComponent, SidebarComponent, NavbarComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FontAwesomeModule,
    AlertModule,
    ProgressBarModule,
  ],
})
export class MainModule {}
