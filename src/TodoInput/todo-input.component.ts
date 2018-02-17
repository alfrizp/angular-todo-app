import { Output, Component, EventEmitter } from "@angular/core";

@Component({
    selector: "TodoInput",
    templateUrl: "todo.input.html"
})

export default class TodoInput {
    public input: string = "";
    @Output() newTodoEvent: EventEmitter<any> = new EventEmitter<any>();

    public handleSubmitTodo() {
        this.newTodoEvent.emit({ text: this.input });
        this.input = "";
    }
}