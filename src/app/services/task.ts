import { Injectable } from '@angular/core';

type TaskStatus = 'todo' | 'doing' | 'done';
type TaskPriority = 'low' | 'medium' | 'high';

interface ITaskList {
  id: number;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
}

@Injectable({
  providedIn: 'root',
})
export class Task {
  private tasks: ITaskList[] = [
    { id: 1, title: 'Learn Angular ', status: 'todo', priority: 'high' },
    { id: 2, title: 'Practice Control Flow ', status: 'doing', priority: 'medium' },
    { id: 3, title: 'Build Demo using Bootstrap ', status: 'done', priority: 'low' },
  ];

  getTasks() {
    return this.tasks;
  }

  addTask(title: string) {
    const nextId = Math.max(...this.tasks.map((t) => t.id), 0) + 1;
    this.tasks.unshift({
      id: nextId,
      title,
      status: 'todo',
      priority: 'medium',
    });
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  nextStatus(task: ITaskList) {
    task.status = task.status === 'todo' ? 'doing' : task.status === 'doing' ? 'done' : 'todo';
  }

  getTaskById(id: number) {
    return this.tasks.find((t) => t.id === id) ?? null;
  }

  getTotalTasks() {
    return this.tasks.length;
  }

  getDoneCount() {
    return this.tasks.filter((t) => t.status === 'done').length;
  }
  getPendingCount() {
    return this.tasks.filter((t) => t.status !== 'done').length;
  }
}
