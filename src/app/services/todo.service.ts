import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions={
  headers: new HttpHeaders({

    'content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  

  todoUrl:string ='https://jsonplaceholder.typicode.com/todos';
  todosLimit ='?_limit=5';


  constructor(private http:HttpClient) { }
//Get Todos
  getTodos():Observable<Todo[]>{
   return this.http.get<Todo[]>(`${this.todoUrl}${this.todosLimit}`);
    
  
  }
  //Toggle Completed
  toggleCompleted(todo):Observable<any>{
    const url =`${this.todoUrl}/${todo.id}`;
    return this.http.put(url,todo,httpOptions);
  }

  deleteTodo(todo:Todo):Observable<Todo>{
    const url =`${this.todoUrl}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOptions);


  }

  //addTodo

  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todoUrl,todo,httpOptions);
  }
}
