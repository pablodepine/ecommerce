import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Product } from '../models/product';
import type { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
}
