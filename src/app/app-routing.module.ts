import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CartComponent } from './cart/cart.component';
import { CoffeeShopAboutComponent } from './coffee-shop-about/coffee-shop-about.component';
import { CoffeeShopCoffeesComponent } from './coffee-shop-coffees/coffee-shop-coffees.component';
import { ShopCartComponentComponent } from './shop-cart-component/shop-cart-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/coffees', pathMatch: 'full' },
  { path: 'coffees', component: CoffeeShopCoffeesComponent },
  { path: 'about', component: CoffeeShopAboutComponent },
  { path: 'cart', component: ShopCartComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
