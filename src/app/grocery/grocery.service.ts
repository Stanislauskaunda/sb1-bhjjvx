import { Injectable } from '@angular/core';
import { GroceryItem } from './grocery-item.model';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  private groceryList: GroceryItem[] = [];
  private nextId = 1;

  getGroceryList(): GroceryItem[] {
    return this.groceryList;
  }

  addItem(name: string) {
    this.groceryList.push({ id: this.nextId++, name });
  }

  removeItem(id: number) {
    this.groceryList = this.groceryList.filter(item => item.id !== id);
  }
}