import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
    constructor(private http: HttpClient) {}

    search(key): Observable<any> {
        return this.http.get(`http://localhost:3000/api/items?q=${key}`);
    }
}