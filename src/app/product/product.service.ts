import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Milk', price: 2.99 },
    { id: 2, name: 'Bread', price: 1.99 },
    { id: 3, name: 'Eggs', price: 3.49 },
    { id: 4, name: 'Cheese', price: 4.99 },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}