import { Routes } from '@angular/router';
import { TasksList } from './pages/tasks-list/tasks-list';
import { Main } from './pages/main/main';
import { About } from './pages/about/about';
import { NotFount } from './pages/not-fount/not-fount';
import { TaskDetails } from './pages/task-details/task-details';
import { TasksPage } from './pages/tasks-page/tasks-page';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },

  {
    path: 'tasks',
    component: TasksPage,
  },
  {
    path: 'tasks/:id',
    component: TaskDetails,
  },
  {
    path: 'main',
    component: Main,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'login',
    component: Login,
  },

  {
    path: 'register',
    component: Register,
  },
  {
    path: '**',
    component: NotFount,
  },
];
