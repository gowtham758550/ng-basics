import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  dataSource!: string[];
  nameInput = "";

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.getAllName()
      .subscribe(data => this.dataSource = data)
  }

  addName(): void {
    this.todoService.addName(this.nameInput);
    this.nameInput = "";
  }

  deleteName(name: string): void {
    this.todoService.deleteName(name);
  }

}
