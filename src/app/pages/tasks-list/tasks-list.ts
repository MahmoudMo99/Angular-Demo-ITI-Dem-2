import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskItem } from '../../components/task-item/task-item';

type TaskStatus = 'todo' | 'doing' | 'done';
type TaskPriority = 'low' | 'medium' | 'high';

interface ITaskList {
  id: number;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
}

@Component({
  selector: 'app-tasks-list',
  imports: [FormsModule, CommonModule, TaskItem],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList {
  newTitleTask: string = '';
  placeholder = 'Enter a new task title...';
  pageTitle: string = 'Tasks List App';

  selectedStatus: TaskStatus | 'all' = 'all';

  isDarkHeader: boolean = false;

  // currentDate = new Date();
  // price: number = 400;

  tasks: ITaskList[] = [
    { id: 1, title: 'Learn Angular ', status: 'todo', priority: 'high' },
    { id: 2, title: 'Practice Control Flow ', status: 'doing', priority: 'medium' },
    { id: 3, title: 'Build Demo using Bootstrap ', status: 'done', priority: 'low' },
  ];

  get totalCount() {
    return this.tasks.length;
  }

  get doneCount() {
    return this.tasks.filter((t) => t.status === 'done').length;
  }

  get pendingCount() {
    return this.tasks.filter((t) => t.status !== 'done').length;
  }

  get filterTasks(): ITaskList[] {
    if (this.selectedStatus === 'all') return this.tasks;
    return this.tasks.filter((t) => t.status === this.selectedStatus);
  }

  addTask() {
    const title = this.newTitleTask.trim();
    if (!title) return;
    const nextId = Math.max(...this.tasks.map((t) => t.id), 0) + 1;
    this.tasks.unshift({ id: nextId, title, status: 'todo', priority: 'medium' });
    this.newTitleTask = '';
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  nextStatus(task: ITaskList) {
    task.status = task.status === 'todo' ? 'doing' : task.status === 'doing' ? 'done' : 'todo';
  }
  toggleHeader() {
    this.isDarkHeader = !this.isDarkHeader;
  }
}
