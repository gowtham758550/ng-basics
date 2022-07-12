import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo-component/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoChildComponent } from './todo-component/todo-child/todo-child.component';
import { FormComponent } from './todo-component/form/form.component';
import { ViewTaskComponent } from './todo-component/view-task/view-task.component';
import { EditTaskComponent } from './todo-component/edit-task/edit-task.component';



@NgModule({
  declarations: [
    TodoComponent,
    TodoChildComponent,
    FormComponent,
    ViewTaskComponent,
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TodoModule { }
