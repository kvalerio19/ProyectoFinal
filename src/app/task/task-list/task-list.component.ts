import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks: Array<Task> = [];


  constructor(private taskService: TaskService, private authService: AuthService) { }

  

  deleteTask(task: Task){
    this.taskService.deleteTask(task, this.authService.user.username)
      .subscribe((next)=>{
        this.getTasks();
        alert("tarea eliminada correctamente");
      }, (error)=>{
        alert("la tarea no se pudo eliminar");
      });
  }

  getTasks(){
    this.taskService.getTasks(this.authService.user.username)
    .subscribe((next: Array<Task>)=>{
      this.tasks = next;
    }, (error)=>{
      alert('No se pudieron cargar las tareas');
    });
  }

  
  ngOnInit(): void {
    this.getTasks();
  }
}
