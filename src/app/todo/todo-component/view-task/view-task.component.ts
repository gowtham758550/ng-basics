import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSource } from 'src/models/dataSource';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styles: [
  ]
})
export class ViewTaskComponent implements OnInit {

  task!: DataSource;

  constructor(
    public activatedRoute: ActivatedRoute,
    public todoService: TodoService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"]
    this.todoService.getTask(id)
      .subscribe(data => this.task = data)
  }

}
