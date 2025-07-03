import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Задача 1', description: 'Описание задачи 1', status: 'не выполнена' },
    { id: 2, title: 'Задача 2', description: 'Описание задачи 2', status: 'не выполнена' },
  ];

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  getTask(id: number): Observable<Task | undefined> {
    return of(this.tasks.find(task => task.id === id));
  }

  addTask(task: Task): void {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
