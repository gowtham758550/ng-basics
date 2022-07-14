import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSource } from 'src/models/data-source.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styles: [
  ]
})
export class EditTaskComponent implements OnInit {

  task!: DataSource;
  id!: string

  constructor(
    public activatedRoute: ActivatedRoute,
    public todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"]
    this.todoService.getTask(this.id)
      .subscribe(data => this.task = data)
  }

  editTask() {
    this.todoService.editTask({
      ...{id: this.id},
      ...this.task
    });
  }

  receiveFormData(event: any) {
    this.task = event;
    this.editTask();
  }

}
