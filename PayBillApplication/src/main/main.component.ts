import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit {
  isIconView = true;
  @ViewChild('sidebar') sidebar: ElementRef<HTMLElement>;
  @ViewChild('main') main: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.iconView();
  }

  openSidebarEmitHandler() {
    this.isIconView = !this.isIconView;
    if (this.isIconView) {
      this.iconView();
      return;
    }
    this.nameView();
  }

  private nameView() {
    this.sidebar.nativeElement.style.width = '250px';
    this.main.nativeElement.style.marginLeft = '250px';
  }

  private iconView() {
    this.sidebar.nativeElement.style.width = '50px';
    this.main.nativeElement.style.marginLeft = '50px';
  }
}
