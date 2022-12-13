import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TodoComponent } from './todo/todo.component';
import { TasksComponent } from './tasks/tasks.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { HighlightpipePipe } from './highlightpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TodoComponent,
    TasksComponent,
    CompletedTasksComponent,
    HighlightpipePipe
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
