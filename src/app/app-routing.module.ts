import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { HomeComponent } from './home/home.component'
import { ShopListComponent } from './shop/shop-list.component'
import { ProductListComponent } from './product/product-list.component'
import { GroceryListComponent } from './grocery/grocery-list.component'
import { SavingsComponent } from './savings/savings.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shops', component: ShopListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'grocery-list', component: GroceryListComponent },
  { path: 'savings', component: SavingsComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}