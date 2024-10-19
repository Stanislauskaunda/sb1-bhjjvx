import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { Shop } from './shop.model';

@Component({
  selector: 'ns-shop-list',
  templateUrl: './shop-list.component.html',
})
export class ShopListComponent implements OnInit {
  shops: Shop[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.shops = this.shopService.getShops();
  }
}