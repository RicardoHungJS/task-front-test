import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksGeneralFormComponent } from './tasks-general-form.component';

describe('TasksGeneralFormComponent', () => {
  let component: TasksGeneralFormComponent;
  let fixture: ComponentFixture<TasksGeneralFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksGeneralFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksGeneralFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
