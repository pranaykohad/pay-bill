import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/model/Emp';

@Component({
  selector: 'app-searchable-dropdown',
  templateUrl: './searchable-dropdown.component.html',
  styleUrls: ['./searchable-dropdown.component.scss'],
})
export class SearchableDropdownComponent {
  selectedEmp: Employee;
  @Input() empList: Employee[];
  @Output() onOptionChange = new EventEmitter<Employee>();

  onHide() {
    this.onOptionChange.emit(this.selectedEmp);
  }
}
