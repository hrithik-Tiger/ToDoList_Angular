import {Component} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {TaskStorageService} from "../task-storage.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {

  /**
   * Task title form field
   */
  title :string ="";
  note: string="";
  /**
   *  Task note form field
   */
  errorMessage:string=""

  constructor(private storage: TaskStorageService, private router: Router) {
  }

  /**
   * Create a task a redirect to the todo list
   */



  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.errorMessage = "Please Enter Task"
      this.router.navigate(['/tasks/add'])
    }

    else{
     this.title = form.value.title;
     this.note = form.value.note;

    this.storage.add(this.title, this.note);
    this.router.navigate(['/tasks'])
    this.errorMessage = ""
  }
}
}
