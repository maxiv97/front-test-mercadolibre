import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class CacheService {
    private cache$ = new BehaviorSubject<any>({});
    private selectedData = {};

    constructor() {}

    setCacheData(key: string, obj: any): void {
        this.selectedData[key] = obj;
        this.cache$.next(this.selectedData);
    }

    getCacheData() : Observable<any> {
        return this.cache$.asObservable();
    }
}