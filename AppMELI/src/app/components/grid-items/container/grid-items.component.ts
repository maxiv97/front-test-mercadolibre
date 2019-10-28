import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from '../../../shared/services/search.service';
import { CacheService } from '../../../shared/services/cache.service';

@Component({
    selector: 'grid-items',
    templateUrl: './grid-items.component.html',
    styleUrls: ['./grid-items.component.scss']
})

export class GridItemsComponent implements OnInit {
    subscriptions: Subscription = new Subscription();
    isItems: boolean;
    isItemDetail: boolean;
    items: any;
    categories: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private searchService: SearchService,
        private cache: CacheService,
    ) {}

    ngOnInit() {
        if (this.route.snapshot.params.id) {
            this.isItemDetail = true;
            this.isItems = true;
            this.cache.getCacheData().subscribe(
                (data) => {
                    this.categories = data['CATEGORIES']
                }).unsubscribe();

        } else {
            this.isItemDetail = false;
        }
        document.body.style.backgroundColor = "#EEEEEE";
        this.getQueryParams();
    }

    getQueryParams() {
        if (this.route.snapshot.queryParams.search) {
            const qp = this.route.snapshot.queryParams.search;
            this.getData(qp);
        }
    }

    getData(key) {
        this.subscriptions.add(this.searchService.search(key).subscribe(
            (data) => {
                this.items = data;
                this.categories = this.items.categories;
                this.isItems = true;
            }
        ));
    }

    onSearch(key) {
        if (key) {
            if (this.route.snapshot.params.id || !this.route.snapshot.routeConfig.path) {
                this.router.navigate(['items'], {
                    queryParams: { search: key}
                });
                setTimeout(() => {
                    this.getQueryParams();
                }, 0);
            } else if(this.route.snapshot.routeConfig.path) {
                this.router.navigate([], {
                    relativeTo: this.route,
                    queryParams: { search: key},
                    queryParamsHandling: 'merge',
                });
                setTimeout(() => {
                    this.getQueryParams();
                }, 0);
            }
        }
    }

    onItemClick(item) {
        this.router.navigate([`items/${item.id}`]);
        this.cache.setCacheData('CATEGORIES', this.items.categories);
    }

    isNotLastCategory(index) {
        return index !== this.categories.length -1;        
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}