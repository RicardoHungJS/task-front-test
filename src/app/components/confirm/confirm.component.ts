import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirm',
  imports: [MatButtonModule],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss',
})
export class ConfirmComponent {
  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  onCancel() {
    this.confirm.emit(false);
  }
  onConfirm() {
    this.confirm.emit(true);
  }
}
