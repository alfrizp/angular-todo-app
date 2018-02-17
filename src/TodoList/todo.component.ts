import { Component, Input } from "@angular/core";

@Component({
    selector: "Todo",
    template: `<li class="{{ done ? 'complete' : '' }}" >
        {{ text }}
        <input type="checkbox" [(ngModel)]="done" >
    </li>`
})

export default class Todo {
    @Input() text: string;
    @Input() done: boolean = false;
}