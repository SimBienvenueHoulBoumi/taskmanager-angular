import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskUpdateComponent } from './components/task-update/task-update.component';
import { HistoryComponent } from './components/history/history.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'create',
    component: TaskCreateComponent,
  },
  {
    path: 'dashboard',
    component: TaskListComponent,
  },
  {
    path: 'update/:id',
    component: TaskUpdateComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  }
];
