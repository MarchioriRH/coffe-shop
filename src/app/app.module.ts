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
import { ShopCartComponentComponent } from './shop-cart-component/shop-cart-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeShopFooterComponent } from './coffee-shop-footer/coffee-shop-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    CartComponent,
    CoffeeShopAboutComponent,
    CoffeeShopCoffeesComponent,
    CoffeeShopBuyQuantityInputComponent,
    ShopCartComponentComponent,
    CoffeeShopFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
