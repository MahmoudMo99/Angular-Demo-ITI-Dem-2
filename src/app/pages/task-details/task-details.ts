import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../../services/task';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
type TaskStatus = 'todo' | 'doing' | 'done';
type TaskPriority = 'low' | 'medium' | 'high';

interface ITaskList {
  id: number;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
}
@Component({
  selector: 'app-task-details',
  imports: [RouterModule],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css',
})
export class TaskDetails implements OnInit, OnDestroy {
  task: ITaskList | null = null;

  private timerId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: Task,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(id);

    this.timerId = setInterval(() => {
      console.log('Task Details is still running');
    }, 500);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerId);
    console.log('Task Details stopped');
  }

  back() {
    this.router.navigate(['/tasks']);
  }
}
