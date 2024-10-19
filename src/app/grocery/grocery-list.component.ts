import { Component, OnInit } from '@angular/core';
import { GroceryService } from './grocery.service';
import { GroceryItem } from './grocery-item.model';

@Component({
  selector: 'ns-grocery-list',
  templateUrl: './grocery-list.component.html',
})
export class GroceryListComponent implements OnInit {
  groceryItems: GroceryItem[] = [];
  newItemName: string = '';

  constructor(private groceryService: GroceryService) {}

  ngOnInit() {
    this.groceryItems = this.groceryService.getGroceryList();
  }

  addItem() {
    if (this.newItemName.trim()) {
      this.groceryService.addItem(this.newItemName);
      this.groceryItems = this.groceryService.getGroceryList();
      this.newItemName = '';
    }
  }

  removeItem(id: number) {
    this.groceryService.removeItem(id);
    this.groceryItems = this.groceryService.getGroceryList();
  }
}