import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { switchMap, of } from 'rxjs';
import Task from '../../models/task';
import TaskDto from '../../models/taskDto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.scss'],
})
export class TaskUpdateComponent implements OnInit {
  taskUpdate: Task | null = null;
  formData: TaskDto = {
    title: '',
    description: '',
    done: false,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const taskId = params.get('id');
          if (taskId) {
            return this.http.get<Task>(`http://localhost:3000/task/${taskId}`);
          } else {
            return of<Task | null>(null);
          }
        })
      )
      .subscribe((data: Task | null) => {
        this.taskUpdate = data;
        if (this.taskUpdate) {
          // Mettre à jour les valeurs par défaut avec les détails de la tâche récupérée
          this.formData.title = this.taskUpdate.title || '';
          this.formData.description = this.taskUpdate.description || '';
          this.formData.done = this.taskUpdate.done || false;
        }
      });
  }

  updateTask(task: TaskDto) {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const taskId = params.get('id');
        if (taskId) {
          return this.http.patch<Task>(`http://localhost:3000/task/${taskId}`, {
            title: task.title,
            description: task.description,
            done: task.done,
          });
        } else {
          return of<Task | null>(null);
        }
      })
    ).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
