import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dinamic-form-field',
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './dinamic-form-field.component.html',
  styleUrl: './dinamic-form-field.component.scss',
})
export class DinamicFormFieldComponent {
  @Output() inputEvent = new EventEmitter<string>();
  @Input() placeholder: string = '';
  @Input() label: string = '';

  onEvent(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.inputEvent.emit(filterValue);
  }
}
