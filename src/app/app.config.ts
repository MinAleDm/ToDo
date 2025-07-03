import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Импортируем FormsModule для работы с ngModel
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { AppRoutingModule } from './app.routes';  // Если ты использовал этот файл для маршрутов

// src/app/app.config.ts
export const appConfig = {
  apiUrl: 'https://api.example.com',
  appName: 'My Angular App',
  version: '1.0.0'
};

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailsComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Настроенные маршруты
    FormsModule,       // Модуль для работы с формами
    RouterModule       // Модуль для маршрутизации
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
