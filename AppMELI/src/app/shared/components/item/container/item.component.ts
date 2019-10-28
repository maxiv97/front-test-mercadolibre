import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {
    @Input() item: any;
    @Output() onItemClick = new EventEmitter;
    constructor() {}

    ngOnInit() {}

    onSearchEvent() {
        this.onItemClick.emit(this.item);
    }
}