import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/CategoryBean';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private readonly httpClient: HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('');
  }
}
