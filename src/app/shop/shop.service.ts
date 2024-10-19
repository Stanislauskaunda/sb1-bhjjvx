import { Injectable } from '@angular/core';
import { Shop } from './shop.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private shops: Shop[] = [
    { id: 1, name: 'SuperMart', address: '123 Main St' },
    { id: 2, name: 'FreshGrocer', address: '456 Elm St' },
    { id: 3, name: 'BudgetFoods', address: '789 Oak St' },
  ];

  getShops(): Shop[] {
    return this.shops;
  }
}