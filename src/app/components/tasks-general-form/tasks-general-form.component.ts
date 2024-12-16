import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { Task } from '../../models/taskModel';

export enum PriorityEnum {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}

export enum StatusEnum {
  Pending = 'Pending',
  InProgress = 'In Progress',
  Completed = 'Completed',
}

type FormSelector = {
  value: string;
  viewValue: string;
};

@Component({
  selector: 'app-tasks-general-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  templateUrl: './tasks-general-form.component.html',
  styleUrl: './tasks-general-form.component.scss',
})
export class TasksGeneralFormComponent {
  @Input() formTitle: string = 'Form Title';
  @Input() tagOptions: string[] = [];
  @Input() task?: Task;
  @Input() taskEvent: 'create' | 'update' = 'create';
  @Output() submitData: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() closeForm = new EventEmitter();

  priorities: FormSelector[] = [
    { value: PriorityEnum.Low, viewValue: 'Low' },
    { value: PriorityEnum.Medium, viewValue: 'Medium' },
    { value: PriorityEnum.High, viewValue: 'High' },
  ];

  statuses: FormSelector[] = [
    { value: StatusEnum.Pending, viewValue: 'Pending' },
    { value: StatusEnum.InProgress, viewValue: 'In Progress' },
    { value: StatusEnum.Completed, viewValue: 'Completed' },
  ];

  taskForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: [
        this.task?.title || '',
        [Validators.required, Validators.minLength(3)],
      ],
      status: [this.task?.status || ''],
      description: [this.task?.description || ''],
      priority: [this.task?.priority || ''],
      dueDate: [this.task?.dueDate || '', this.dueDateValidator],
      tags: [this.task?.tags || [], this.uniqueTagsValidator],
    });
  }

  dueDateValidator(control: FormControl): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      return { pastDate: true };
    }
    return null;
  }

  uniqueTagsValidator(control: FormControl): { [key: string]: boolean } | null {
    const tags = control.value;
    if (tags && tags.length !== new Set(tags).size) {
      return { nonUniqueTags: true };
    }
    return null;
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.submitData.emit(this.taskForm.value);
    }
  }

  onCancel() {
    this.closeForm.emit();
  }
}
