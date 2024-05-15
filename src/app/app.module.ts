import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CartComponent } from './cart/cart.component';

import { FormsModule } from '@angular/forms';
import { CoffeeShopAboutComponent } from './coffee-shop-about/coffee-shop-about.component';
import { CoffeeShopCoffeesComponent } from './coffee-shop-coffees/coffee-shop-coffees.component';
import { CoffeeShopBuyQuantityInputComponent } from './coffee-shop-buy-quantity-input/coffee-shop-buy-quantity-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    CartComponent,
    CoffeeShopAboutComponent,
    CoffeeShopCoffeesComponent,
    CoffeeShopBuyQuantityInputComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
