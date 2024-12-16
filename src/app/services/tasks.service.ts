import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task, TaskBackResponse } from '../models/taskModel';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiUrl = 'https://express-tasks-back.vercel.app/api/v1/task';
  // private apiUrl = 'http://localhost:3000/api/v1/task';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTask(id: string): Observable<TaskBackResponse> {
    return this.http.get<TaskBackResponse>(`${this.apiUrl}/${id}`);
  }

  createTask(task: Task): Observable<TaskBackResponse> {
    return this.http.post<TaskBackResponse>(this.apiUrl, task);
  }

  updateTask(id: string, task: Task): Observable<TaskBackResponse> {
    return this.http.put<TaskBackResponse>(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
