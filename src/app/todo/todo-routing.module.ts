import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './todo-component/edit-task/edit-task.component';
import { TodoComponent } from './todo-component/todo.component';
import { ViewTaskComponent } from './todo-component/view-task/view-task.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'todo/:id',
    component: ViewTaskComponent
  },
  {
    path: 'todo/:id/edit',
    component: EditTaskComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TodoRoutingModule { }
