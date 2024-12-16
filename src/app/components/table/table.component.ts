import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DinamicFormFieldComponent } from '../dinamic-form-field/dinamic-form-field.component';
import { GeneralModalComponent } from '../general-modal/general-modal.component';
import { TasksGeneralFormComponent } from '../tasks-general-form/tasks-general-form.component';
import { Task } from '../../models/taskModel';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from '../confirm/confirm.component';

enum taskEvents {
  generalTask = 'generalTask',
  confirmation = 'confirmation',
}

@Component({
  selector: 'app-table',
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    DinamicFormFieldComponent,
    MatIconModule,
    MatButtonModule,
    GeneralModalComponent,
    TasksGeneralFormComponent,
    ConfirmComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements AfterViewInit, OnInit {
  titleFilter: string = '';
  statusPriorityFilter: string = '';
  newTaskModalOpen: boolean = false;
  confirmationModalOpen: boolean = false;
  editModalOpen: boolean = false;
  selectedTask!: Task;

  tagList: string[] = ['tag 1', 'tag 2', 'tag 3', 'tag 4', 'tag 5'];

  displayedColumns: string[] = [
    'title',
    'status',
    'priority',
    'dueDate',
    'tags',
    'actions',
  ];

  dataSource = new MatTableDataSource<Task>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  taskService = inject(TasksService);

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.dataSource.data = tasks;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openNewTaskModal() {
    this.newTaskModalOpen = true;
  }

  openEditTaskModal(task: Task) {
    this.editModalOpen = true;
    this.selectedTask = task;
  }

  openDeleteTaskModal(task: Task) {
    this.confirmationModalOpen = true;
    this.selectedTask = task;
  }

  closeModal(Section: 'generalTask' | 'confirmation') {
    if (Section === 'generalTask') {
      this.newTaskModalOpen = false;
      this.editModalOpen = false;
      this.selectedTask = {} as Task;
    } else if (Section === 'confirmation') {
      this.confirmationModalOpen = false;
      this.selectedTask = {} as Task;
    }
  }

  handleInputEvent(field: 'statusPriority' | 'title', value: string) {
    if (field === 'statusPriority') {
      this.statusPriorityFilter = value;
      this.titleFilter = '';
      this.applyFilterForStatusAndPriority(value);
    } else if (field === 'title') {
      this.titleFilter = value;
      this.statusPriorityFilter = '';
      this.applyFilterForTitle(value);
    }
  }

  applyFilterForTitle(event: string) {
    this.dataSource.filterPredicate = (data, filter) => {
      return data.title.toLowerCase().includes(filter);
    };
    this.dataSource.filter = event.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilterForStatusAndPriority(event: string) {
    this.dataSource.filterPredicate = (data, filter) => {
      return (
        data.status.toLowerCase().includes(filter) ||
        data.priority.toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = event.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ResetSearchFields() {
    this.titleFilter = '';
    this.statusPriorityFilter = '';
    this.dataSource.filter = '';
  }

  onCreateTask(task: Task) {
    this.taskService.createTask(task).subscribe((taskResponse) => {
      this.dataSource.data = [...this.dataSource.data, taskResponse.newTask];
      this.closeModal(taskEvents.generalTask);
    });
  }

  editTask(task: Task) {
    this.taskService.updateTask(this.selectedTask._id, task).subscribe(() => {
      this.dataSource.data = this.dataSource.data.map((taskItem) => {
        if (taskItem._id === this.selectedTask._id) {
          return task;
        }
        return taskItem;
      });
      this.closeModal(taskEvents.generalTask);
    });
  }

  deleteTask(response: boolean) {
    if (response) {
      this.taskService.deleteTask(this.selectedTask._id).subscribe(() => {
        this.dataSource.data = this.dataSource.data.filter(
          (task) => task._id !== this.selectedTask._id
        );
        this.closeModal(taskEvents.confirmation);
      });
    }
  }
}
