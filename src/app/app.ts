import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Home } from './components/home/home';
import { TasksList } from './pages/tasks-list/tasks-list';
import { Main } from './pages/main/main';
import { About } from './pages/about/about';
import { Nav } from './components/nav/nav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Nav, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string = 'Task Board Manager';

  imgSrc: string = 'images/logo.png';
  imgSrc2: string = 'images/logo-2.webp';

  isFirstImage: boolean = true;

  isVisible: boolean = true;

  count: number = 0;

  changeTitle() {
    this.title = 'Angular Task Board';
  }

  changeImage() {
    this.imgSrc = this.imgSrc2;
  }

  toggleImage() {
    this.isFirstImage = !this.isFirstImage;
  }

  increase() {
    this.count++;
  }
  decrease() {
    this.count--;
  }
}
