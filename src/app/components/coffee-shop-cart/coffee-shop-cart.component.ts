/**
 * Component CoffeeShopCartComponent
 * @implements OnInit
 * @implements OnDestroy
 * @description Component to manage the cart of the coffee shop.
 */

import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/coffee-shop-cart.service';
import { Coffee } from '../../models/Coffee';
import { Observable, Subscription } from 'rxjs';
import { CoffeeService } from '../../services/coffee-shop-coffee.service';

@Component({
  selector: 'app-cart',
  templateUrl: './coffee-shop-cart.component.html',
  styleUrl: './coffee-shop-cart.component.scss'
})

export class CartComponent implements OnInit, OnDestroy{
  cart$: Coffee[] = [];
  private subscription: Subscription = new Subscription;

  constructor(private cartService: CartService, private coffeeService: CoffeeService) { }
  
  /** 
   * Initialize the component
   * @return void
   * @description Initialize the component
   * @param void
   * @observable
   **/ 
  ngOnInit() {
    this.subscription = this.cartService.items.subscribe((data) => {
      this.cart$ = data});
  } 

  /** 
   * Destroy the component
   * @return void
   * @description Destroy the component
   * @param void
   * @observable
   **/
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /** 
   * Method to calculate the total balance of the cart.
   * @return number
   * @description Method to calculate the total balance of the cart.
   * @param void   
   **/ 
  calculateBalance() : number{
    return this.cartService.calculateBalance();
  }

  /**
   * Method to call removeFromCart(Coffee: coffee) method from cartService.
   * @return void
   * @description Method to Method to call removeFromCart(Coffee: coffee) method from cartService.
   * @param {Coffee} coffee
   **/ 
  removeFromCart(coffee: Coffee): void {
    this.cartService.delProduct(coffee);
  }

  /**
   * Method to increment product stock when it is removed from cart.
   * @return void
   * @description Method to increment product stock when it is removed from cart.
   * @param {Coffee} coffee 
   **/ 
  addStock(coffee: Coffee): void {
    if (coffee.quantity <= 1) {
      this.removeFromCart(coffee);
      return;
    }
    coffee.quantity--;
    this.coffeeService.changeStock(coffee, 1);
  }

  /** 
   * Method to call clearCart() method from cartService.
   * @return void
   * @description Method to call clearCart() method from cartService.
   * @param void
   **/ 
  clearCart(): void {
    this.cartService.clearCart();
  }
}


