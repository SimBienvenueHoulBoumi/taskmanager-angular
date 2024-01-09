import { Component } from '@angular/core';
import Task from '../../models/task';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  
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
    this.http.get<any>('http://localhost:3000/task').subscribe((data) => {
      this.tasks = data;
    });
  }

}
