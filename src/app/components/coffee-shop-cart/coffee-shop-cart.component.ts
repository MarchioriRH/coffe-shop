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
  
  // Method to get a list of products in shop cart.
  ngOnInit() {
    this.subscription = this.cartService.items.subscribe((data) => {
      this.cart$ = data});
  } 

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Method to calculate the total balance of the cart.
  calculateBalance() : number{
    return this.cartService.calculateBalance();
  }

  // Method to remove a product from the cart.
  removeFromCart(coffee: Coffee) {
    this.cartService.delProduct(coffee);
  }

  addStock(coffee: Coffee) {
    console.log(coffee.quantity);
    if (coffee.quantity <= 1) {
      this.removeFromCart(coffee);
      return;
    }
    coffee.quantity--;
    this.coffeeService.changeStock(coffee, 1);
  }

  // Method to clear the cart.
  clearCart() {
    this.cartService.clearCart();
  }
}


