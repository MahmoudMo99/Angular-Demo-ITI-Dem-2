import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class TasksList implements OnInit, OnChanges {
  @Input() searchText: string = '';
  @Input() selectedStatus: TaskStatus | 'all' = 'all';

  newTitleTask: string = '';
  placeholder = 'Enter a new task title...';
  pageTitle: string = 'Tasks List App';

  // selectedStatus: TaskStatus | 'all' = 'all';

  isDarkHeader: boolean = false;

  tasks: ITaskList[] = [];
  filteredTasks: ITaskList[] = [];

  // currentDate = new Date();
  // price: number = 400;

  // DI , Variable Initit
  constructor(private taskService: Task) {
    // this.getAllTasks();
  }

  // constructor = injection
  // ngOnInit = initialization , data loading

  ngOnInit(): void {
    // console.log('TaskList initialized!');
    this.getAllTasks();
    this.filteredTasks = this.applyFilter();
  }

  // @input property changes
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchText'] || changes['selectedStatus']) {
      this.filteredTasks = this.applyFilter();
    }
  }
  // from service
  getAllTasks() {
    this.tasks = this.taskService.getTasks();
  }

  // get filterTasks(): ITaskList[] {
  //   if (this.selectedStatus === 'all') return this.tasks;
  //   return this.tasks.filter((t) => t.status === this.selectedStatus);
  // }

  applyFilter(): ITaskList[] {
    let list = this.tasks;

    if (this.selectedStatus !== 'all') {
      list = list.filter((t) => t.status === this.selectedStatus);
    }

    const q = this.searchText.trim().toLowerCase();
    if (q) {
      list = list.filter((t) => t.title.toLowerCase().includes(q));
    }
    return list;
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

  toggleHeader() {
    this.isDarkHeader = !this.isDarkHeader;
  }
}
