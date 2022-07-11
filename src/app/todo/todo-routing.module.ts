import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo-component/todo.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TodoRoutingModule { }
