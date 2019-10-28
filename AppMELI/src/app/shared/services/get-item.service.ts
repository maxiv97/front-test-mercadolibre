import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetItemService {
    constructor(private http: HttpClient) {}

    getItemById(id): Observable<any> {
        return this.http.get(`http://localhost:3000/api/items/${id}`);
    }
}