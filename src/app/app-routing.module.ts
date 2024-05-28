import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeShopAboutComponent } from './components/coffee-shop-about/coffee-shop-about.component';
import { CoffeeShopCoffeesComponent } from './components/coffee-shop-coffees/coffee-shop-coffees.component';
import { CoffeeShopContactComponent } from './components/coffee-shop-contact/coffee-shop-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'shop', component: CoffeeShopCoffeesComponent },
  { path: 'about', component: CoffeeShopAboutComponent },
  { path: 'contact', component: CoffeeShopContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
