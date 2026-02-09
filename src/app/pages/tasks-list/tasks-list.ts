import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskItem } from '../../components/task-item/task-item';
import { Task } from '../../services/task';

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

  tasks: ITaskList[] = [];

  // currentDate = new Date();
  // price: number = 400;

  constructor(private taskService: Task) {
    this.getAllTasks();
  }
  // from service
  getAllTasks() {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (!this.newTitleTask.trim()) return;
    this.taskService.addTask(this.newTitleTask);
    this.newTitleTask = '';
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.getAllTasks();
  }

  nextStatus(task: ITaskList) {
    this.taskService.nextStatus(task);
    this.getAllTasks();
  }

  get totalCount() {
    return this.taskService.getTotalTasks();
  }

  get doneCount() {
    return this.taskService.getDoneCount();
  }

  get pendingCount() {
    return this.taskService.getPendingCount();
  }

  get filterTasks(): ITaskList[] {
    if (this.selectedStatus === 'all') return this.tasks;
    return this.tasks.filter((t) => t.status === this.selectedStatus);
  }

  toggleHeader() {
    this.isDarkHeader = !this.isDarkHeader;
  }
}
