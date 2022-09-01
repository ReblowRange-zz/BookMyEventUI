import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private readonly httpClient: HttpClient) { }

  public addCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>('category', category);
  }

  public getCategoryById(id: number): Observable<Category> {
    return this.httpClient.get<Category>('category/id/' + id);
  }

  public getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('category/all');
  }

  public updateCategory(category: Category): Observable<Category> {
    return this.httpClient.put<Category>('category', category);
  }

  public deleteCategoryById(id: number): Observable<Category> {
    return this.httpClient.delete<Category>('category/id/' + id);
  }

  public createEvent(event: Event): Observable<Event> {
    return this.httpClient.post<Event>('event', event);
  }
}
