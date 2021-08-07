import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [AppComponent, LoaderComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
