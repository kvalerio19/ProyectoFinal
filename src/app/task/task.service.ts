import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public tasks: Array<Task> = [];

  /*public addTask(task: Task){
    this.tasks.push(task);
  }

  public deleteTask(task: Task){
    const position = this.tasks.findIndex( 
      (taskParam: Task) => { return task.code === taskParam.code }
      );
    this.tasks.splice(position, 1);
  }*/

  public addTask(task: Task, username: String){
    return this.httpClient.post('https://u-task-api.herokuapp.com/task/'+username, task);
  }

  public getTasks(username: String){
    return this.httpClient.get('https://u-task-api.herokuapp.com/user/'+username);
  }

  public deleteTask(task: Task, username: String){
    return this.httpClient.delete(
      'https://u-task-api.herokuapp.com/task/'+username+'?taskId='+task.code);
  }

  constructor(private httpClient: HttpClient) { }
}
