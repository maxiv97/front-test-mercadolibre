import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetItemService } from 'src/app/shared/services/get-item.service';

@Component({
    selector: 'item-detail',
    templateUrl: 'item-detail.component.html',
    styleUrls: ['item-detail.component.scss']
})

export class ItemDetailComponent implements OnInit {

    item: any;

    constructor(
        private route: ActivatedRoute,
        private getItem: GetItemService
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.params.id;
        this.getItem.getItemById(id).subscribe(
            (data) => this.item = data.item
        )
    }
}