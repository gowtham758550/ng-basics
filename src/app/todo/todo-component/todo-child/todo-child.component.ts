import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from 'src/models/dataSource';

@Component({
  selector: 'app-todo-child',
  templateUrl: './todo-child.component.html',
  styleUrls: ['./todo-child.component.css']
})
export class TodoChildComponent implements OnInit {

  @Input() todo!: DataSource;
  @Output() emittask = new EventEmitter<string>();
  priorityClassList: string[]

  constructor(
    public router: Router
  ) {
    this.priorityClassList = [];
  }

  ngOnInit(): void {
    this.priorityClassList.push(this.todo.priority.toLowerCase());
  }

  deletetask() {
    this.emittask.emit(this.todo.id);
  }

  navigateTo(id: string) {
    this.router.navigate([`/todo/${id}/edit`])
  }

}
