import { Component } from '@angular/core';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-root',
  imports: [TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
