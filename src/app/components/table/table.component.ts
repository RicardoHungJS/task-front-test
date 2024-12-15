import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, inject, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DinamicFormFieldComponent } from '../dinamic-form-field/dinamic-form-field.component';

type Task = {
  title: string;
  status: string;
  priority: string;
  dueDate: string;
  tags: string[];
};

const TASK_DATA: Task[] = [
  {
    title: 'Fix API bug',
    status: 'In Progress',
    priority: 'Low',
    dueDate: '2024-12-20',
    tags: ['backend', 'bug'],
  },
  {
    title: 'Redesign homepage',
    status: 'Pending',
    priority: 'Medium',
    dueDate: '2024-12-25',
    tags: ['frontend', 'UI'],
  },
  {
    title: 'Write unit tests',
    status: 'Completed',
    priority: 'High',
    dueDate: '2024-12-10',
    tags: ['testing'],
  },
  {
    title: 'Set up CI/CD',
    status: 'Pending',
    priority: 'Low',
    dueDate: '2024-12-30',
    tags: ['devops'],
  },
  {
    title: 'Optimize database queries',
    status: 'In Progress',
    priority: 'Medium',
    dueDate: '2024-12-22',
    tags: ['backend', 'performance'],
  },
  {
    title: 'Prepare sprint demo',
    status: 'Pending',
    priority: 'High',
    dueDate: '2024-12-28',
    tags: ['team'],
  },
  {
    title: 'Fix CSS inconsistencies',
    status: 'Pending',
    priority: 'Low',
    dueDate: '2024-12-18',
    tags: ['frontend', 'UI'],
  },
  {
    title: 'Refactor login flow',
    status: 'In Progress',
    priority: 'Medium',
    dueDate: '2024-12-19',
    tags: ['authentication', 'frontend'],
  },
  {
    title: 'Document API endpoints',
    status: 'Completed',
    priority: 'High',
    dueDate: '2024-12-08',
    tags: ['documentation'],
  },
  {
    title: 'Update dependencies',
    status: 'Pending',
    priority: 'Low',
    dueDate: '2024-12-15',
    tags: ['maintenance'],
  },
  {
    title: 'Create error handling module',
    status: 'In Progress',
    priority: 'Medium',
    dueDate: '2024-12-21',
    tags: ['backend', 'error-handling'],
  },
  {
    title: 'Design onboarding flow',
    status: 'Pending',
    priority: 'High',
    dueDate: '2024-12-24',
    tags: ['UI', 'UX'],
  },
  {
    title: 'Conduct code review',
    status: 'Completed',
    priority: 'Low',
    dueDate: '2024-12-05',
    tags: ['team'],
  },
  {
    title: 'Set up analytics tracking',
    status: 'In Progress',
    priority: 'Medium',
    dueDate: '2024-12-27',
    tags: ['analytics', 'backend'],
  },
  {
    title: 'Research AI tools',
    status: 'Pending',
    priority: 'High',
    dueDate: '2024-12-29',
    tags: ['research'],
  },
  {
    title: 'Fix 404 errors',
    status: 'Completed',
    priority: 'Low',
    dueDate: '2024-12-13',
    tags: ['bug', 'frontend'],
  },
  {
    title: 'Improve SEO',
    status: 'In Progress',
    priority: 'Medium',
    dueDate: '2024-12-26',
    tags: ['SEO', 'frontend'],
  },
  {
    title: 'Deploy staging server',
    status: 'Pending',
    priority: 'High',
    dueDate: '2024-12-23',
    tags: ['devops', 'staging'],
  },
  {
    title: 'Organize team retrospective',
    status: 'Completed',
    priority: 'Low',
    dueDate: '2024-12-11',
    tags: ['team', 'management'],
  },
  {
    title: 'Implement dark mode',
    status: 'In Progress',
    priority: 'Medium',
    dueDate: '2024-12-17',
    tags: ['frontend', 'UI'],
  },
];

@Component({
  selector: 'app-table',
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    DinamicFormFieldComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = [
    'title',
    'status',
    'priority',
    'dueDate',
    'tags',
    'actions',
  ];
  dataSource = new MatTableDataSource<Task>(TASK_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
}
