import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-general-modal',
  imports: [CommonModule, MatIconModule],
  templateUrl: './general-modal.component.html',
  styleUrl: './general-modal.component.scss',
})
export class GeneralModalComponent {
  @Output() closeEvent = new EventEmitter<void>();
  constructor() {}

  close() {
    this.closeEvent.emit();
  }
}
