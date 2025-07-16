import { Component, Inject, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';
import type { Observable } from 'rxjs';
import type { Product } from '../shared/models/product';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  providers: [ProductsService, HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  product$!: Observable<Product[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.product$ = this.productsService.getProducts();
  }
}
