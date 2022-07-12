import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataSource } from 'src/models/dataSource';
import { TodoService } from '../todo.service';
import { nanoid } from 'nanoid';

export interface DataSourceWithoutId {
  name: "string",
  description: "string",
  priority: "string"
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  task!: DataSourceWithoutId;
  tasks!: DataSource[];


  constructor(
    private todoService: TodoService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.todoService.getAlltask()
      .subscribe(data => this.tasks = data)
  }

  addtask(): void {
    // this.todoService.addtask(this.taskInput);
    this.todoService.addtask({
      id: nanoid(12),
      ...this.task
    });
  }

  deletetask(id: string): void {
    this.todoService.deletetask(id);
  }

  receive(event:string) {
    this.deletetask(event);
  }

  receiveFormData(event: any) {
    this.task = event;
    this.addtask()
  }

}
