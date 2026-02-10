import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksList } from '../tasks-list/tasks-list';
type TaskStatus = 'todo' | 'doing' | 'done';

@Component({
  selector: 'app-tasks-page',
  imports: [FormsModule, TasksList],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css',
})
export class TasksPage {
  searchText: string = '';
  selectedStatus: TaskStatus | 'all' = 'all';
}
