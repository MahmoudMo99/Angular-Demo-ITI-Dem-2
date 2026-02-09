import { Component } from '@angular/core';
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
export class TaskDetails {
  task: ITaskList | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: Task,
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    console.log(typeof id);

    this.task = this.taskService.getTaskById(id);
    console.log(this.task);
  }

  back() {
    this.router.navigate(['/tasks']);
  }
}
