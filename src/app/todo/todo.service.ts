import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { find, Observable, of } from 'rxjs';
import { DataSource } from 'src/models/dataSource';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  dataSource: string[];
  tasks: DataSource[]; 

  constructor(
    public router: Router
    ) {
    this.dataSource = [
      'Boxing'
    ]
    this.tasks = [
      {
        id: "1asldfk",
        name: "Read Newspaper",
        description: "Read newspaper daily",
        priority: "Low"
      },
      {
        id: "EvyYz_bA0XhG",
        name: "Sleep",
        description: "Go to bed",
        priority: "Medium"
      },
      {
        id: "wefsadv88",
        name: "UI design",
        description: "Complete UI design for homepage",
        priority: "High"
      },
    ];
  }

  // POST
  addtask(task: DataSource): void {
    this.tasks.push(task);
  }

  // GET
  getAlltask(): Observable<DataSource[]> {
    return of(this.tasks);
  }

  // GET single task
  getTask(id: string): Observable<DataSource> {
    return of(this.tasks.filter(e => e.id == id)[0]);
  }

  findIndex(id: string): number {
    return this.tasks.indexOf(this.tasks.filter(e => e.id == id)[0]);
  }

  // PUT
  editTask(task: DataSource) {
    const index = this.findIndex(task.id);
    if (index != -1) this.tasks[index] = task;
    this.router.navigate([`/todo`]);
  }

  // DELETE
  deletetask(id: string): void {
    const index = this.findIndex(id);
    if (index != -1) this.tasks.splice(index, 1);
  }
}
