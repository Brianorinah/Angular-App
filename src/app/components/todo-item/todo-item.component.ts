import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {TodoService} from '../../services/todo.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() deleteTodo:EventEmitter<Todo>=new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {

      }

      //set Dynamic Classes
    setClasses(){

      let classes={
        todo:true,
        'is-complete':this.todo.completed
        
      }

      return classes;
    }
//toggle class
onToggle(todo){
  //Toggle in UI
    this.todo.completed=!this.todo.completed;
  //Toggle in API
  this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
}

//Deleting a todo

onDelete(todo){

  this.deleteTodo.emit(todo); 

}

}
