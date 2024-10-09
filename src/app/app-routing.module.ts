import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { TodoListComponent } from './todo-list/todo-list.component';
import { MessengerComponent } from './messenger/messenger.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'messenger', component: MessengerComponent },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }