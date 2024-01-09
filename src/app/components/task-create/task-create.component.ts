import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import TaskDto from '../../models/taskDto';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss',
})
export class TaskCreateComponent {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  formData: TaskDto = {
    title: '',
    description: '',
    done: false,
  };

  createTask(task: TaskDto) {
    this.http
      .post<any>('http://localhost:3000/task', task)
      .subscribe((response) => {
        this.router.navigate(['/dashboard']);
      });
  }
}
