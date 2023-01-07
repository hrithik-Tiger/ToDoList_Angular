import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {TaskAddComponent} from "./task-add/task-add.component";
import {TaskViewComponent} from "./task-view/task-view.component";
import {TaskEditComponent} from "./task-edit/task-edit.component";
import { LoginComponentComponent } from './LoginComponent/login-component/login-component.component';
import { AuthGuard } from './Authentication/auth.guard';

const routes: Routes = [
  
  {
  // Login component 
     path: 'login',
     component:LoginComponentComponent

  },
  {
    // contains the whole todo list
    path: 'tasks',
    component: TodoComponent,
    canActivate: [AuthGuard],

    
  },
  {
    // display the form to add a new task
    path: 'tasks/add',
    component: TaskAddComponent,
    data: {title: 'Add new task'},
    canActivate: [AuthGuard]
  },
  {
    // display the form to add a new task
    path: 'tasks/:id',
    component: TaskViewComponent,
    data: {title: 'Task to do'},
    canActivate: [AuthGuard]
  },
  {
    // display the form to add a new task
    path: 'tasks/:id/edit',
    component: TaskEditComponent,
    data: {title: 'Task edition'},
    canActivate: [AuthGuard]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
