import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  public taskFormGroup: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    endDate: new FormControl(null, [Validators.required]),
    startDate: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    hashtags: new FormControl(null, [Validators.required]),
    priority: new FormControl(null, [Validators.required]),
    complexLevel: new FormControl(null, [Validators.required])
  });

  public onSubmit(){
    const task: Task = this.taskFormGroup.value;

    //task.startDate = new Date();
    //task.complexLevel = 1;
    //task.hashtags = ['#prueba'];
    //task.priority = 'Alta';
    //task.status = 'En Progreso';

    this.taskService.addTask(task, this.authService.user.username)
    .subscribe((next)=>{
      alert('Tarea agregada exitosamente');
    }, (error)=>{
      alert('Tarea no fue agregada!');
    });
  }

  constructor(private taskService: TaskService, private authService: AuthService) { }

  ngOnInit(): void {
  }

}
