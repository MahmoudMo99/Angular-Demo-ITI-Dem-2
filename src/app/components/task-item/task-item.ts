import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TruncatePipe } from '../pipes/truncate-pipe';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../../directives/highlight';

type TaskStatus = 'todo' | 'doing' | 'done';
type TaskPriority = 'low' | 'medium' | 'high';

interface ITaskList {
  id: number;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
}

@Component({
  selector: 'app-task-item',
  imports: [FormsModule, CommonModule, Highlight, TruncatePipe],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  @Input() task!: ITaskList;

  @Output() next = new EventEmitter<ITaskList>();
  @Output() remove = new EventEmitter<number>();

  nextStatus() {
    this.next.emit(this.task);
  }
  deleteTask() {
    this.remove.emit(this.task.id);
  }
}
