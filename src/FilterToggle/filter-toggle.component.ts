import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "FilterToggle",
    templateUrl: "filter.toggle.html"
})
export default class FilterToggle{
    public filterEnabled: boolean = true;
    @Output() onFilterToggleChange: EventEmitter<any> = new EventEmitter();

    public handleFilterChange() {
        console.info("FILTER CHANGE!", this.filterEnabled);
        this.onFilterToggleChange.emit(this.filterEnabled);
    }
}