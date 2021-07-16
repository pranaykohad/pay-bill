import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showLoader = true;

  constructor() {
    if (this.showLoader) {
      setTimeout(() => {
        this.showLoader = false;
      }, 5000);
    }
  }
}
