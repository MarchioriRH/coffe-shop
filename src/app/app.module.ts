import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeListComponent } from './components/coffee-shop-list/coffee-shop-list.component';
import { CartComponent } from './components/coffee-shop-cart/coffee-shop-cart.component';

import { FormsModule } from '@angular/forms';
import { CoffeeShopAboutComponent } from './components/coffee-shop-about/coffee-shop-about.component';
import { CoffeeShopCoffeesComponent } from './components/coffee-shop-coffees/coffee-shop-coffees.component';
import { CoffeeShopBuyQuantityInputComponent } from './components/coffee-shop-buy-quantity-input/coffee-shop-buy-quantity-input.component';

import { HttpClientModule } from '@angular/common/http';
import { CoffeeShopFooterComponent } from './components/coffee-shop-footer/coffee-shop-footer.component';
import { CoffeeShopContactComponent } from './components/coffee-shop-contact/coffee-shop-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    CartComponent,
    CoffeeShopAboutComponent,
    CoffeeShopCoffeesComponent,
    CoffeeShopBuyQuantityInputComponent,
    CoffeeShopFooterComponent,
    CoffeeShopContactComponent,
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
