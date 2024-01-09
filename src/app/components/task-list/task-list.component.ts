import { Component, Input } from '@angular/core';
import Task from '../../models/task';
import { HttpClient } from '@angular/common/http';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  constructor(private http: HttpClient) {}

  /***
   *
   *  Après avoir fait la requête de suppression
   *  on va filtrer les tâches pour ne pas afficher
   *  celle qui a été supprimée
   *
   * ***/

  tasks: Task[] = [];

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/task/false').subscribe((data) => {
      this.tasks = data;
    });
  }

  deleteTask(taskId: string) {
    this.http
      .delete<any>(`http://localhost:3000/task/${taskId}`)
      .subscribe(() => {
        this.tasks = this.tasks.filter((task) => task._id !== taskId);
      });
  }
}
