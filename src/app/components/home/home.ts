import { Component } from '@angular/core';
import { ITask } from '../../models/i-task';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  tasksCount: number = 5;

  tasks: ITask[] = [
    {
      id: 1,
      name: 'Learn Angular',
      image: 'images/task1.avif',
      status: 'done',
    },
    {
      id: 2,
      name: 'Practice Data Binding',
      image: 'images/task2.avif',
      status: 'pending',
    },
  ];

  // status: string = 'done';
}
