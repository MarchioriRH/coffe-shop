import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CartComponent } from './cart/cart.component';
import { CoffeeShopAboutComponent } from './coffee-shop-about/coffee-shop-about.component';
import { CoffeeShopCoffeesComponent } from './coffee-shop-coffees/coffee-shop-coffees.component';

const routes: Routes = [
  { path: '', redirectTo: '/coffees', pathMatch: 'full' },
  { path: 'coffees', component: CoffeeShopCoffeesComponent },
  // { path: 'cart', component: CartComponent },
  { path: 'about', component: CoffeeShopAboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
