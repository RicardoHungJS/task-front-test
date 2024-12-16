export type Task = {
  _id: string;
  title: string;
  description?: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
  dueDate: string;
  tags?: string[];
};

export interface TaskBackResponse {
  message: string;
  newTask: NewTask;
}

export interface NewTask extends Task {
  __v: number;
}
