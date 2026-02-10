import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TruncatePipe } from '../pipes/truncate-pipe';
import { Highlight } from '../../directives/highlight';
import { HoverCard } from '../../directives/hover-card';
import { RouterLink } from '@angular/router';

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
  imports: [CommonModule, Highlight, TruncatePipe, HoverCard, RouterLink],
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
