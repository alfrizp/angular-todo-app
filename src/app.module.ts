import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { state } from "./shared";
import TodoList from "./TodoList/todo-list.component";
import Todo from "./TodoList/todo.component";
import TodoInput from "./TodoInput/todo-input.component";
import FilterToggle from "./FilterToggle/filter-toggle.component";

@NgModule({
    declarations: [
        AppComponent,
        TodoList,
        Todo,
        TodoInput,
        FilterToggle
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [{
        provide: state,
        useValue: {
            showDone: true,
            todos: [
                {
                    text: "Wake up",
                    done: true,
                },
                {
                    text: "Sholat",
                    done: true
                }
            ]
        }
    }],
})

export class AppModule {

}