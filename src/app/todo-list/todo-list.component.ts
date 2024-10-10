import { Component } from '@angular/core';
import { LocalNotifications } from '@nativescript/local-notifications';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  dueDate: Date;
  reminder: Date;
  category: string;
  priority: 'low' | 'medium' | 'high';
  assignedTo?: string;
}

@Component({
  selector: 'ns-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Task[] = [];
  newTodoText: string = '';
  categories: string[] = ['Work', 'Personal', 'Shopping', 'Health'];
  selectedCategory: string = 'Work';
  selectedPriority: 'low' | 'medium' | 'high' = 'medium';
  dueDate: Date = new Date();
  reminder: Date = new Date();

  constructor(private localNotifications: typeof LocalNotifications) {}

  addTodo() {
    if (this.newTodoText.trim()) {
      const newTask: Task = {
        id: Date.now(),
        text: this.newTodoText,
        completed: false,
        dueDate: this.dueDate,
        reminder: this.reminder,
        category: this.selectedCategory,
        priority: this.selectedPriority
      };
      this.todos.push(newTask);
      this.newTodoText = '';
      this.scheduleReminder(newTask);
    }
  }

  toggleTodo(todo: Task) {
    todo.completed = !todo.completed;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  scheduleReminder(task: Task) {
    this.localNotifications.schedule([{
      id: task.id,
      title: 'Task Reminder',
      body: task.text,
      at: task.reminder
    }]);
  }
}