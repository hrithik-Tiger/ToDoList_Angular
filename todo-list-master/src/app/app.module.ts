import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { LoginComponentComponent } from './LoginComponent/login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TaskEditComponent,
    TaskViewComponent,
    TaskAddComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
