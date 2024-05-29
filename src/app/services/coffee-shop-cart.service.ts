/**
 * @description Service to manage the shop cart, add, remove and calculate the total balance.
 * @class CartService 
 */

import { Injectable } from '@angular/core';
import { Coffee } from '../models/Coffee';
import { BehaviorSubject } from 'rxjs';
import { CoffeeService } from './coffee-shop-coffee.service';

@Injectable({
  providedIn: 'root', 
})

export class CartService {
  private _shopCart: Coffee[] = []; // Here we will store the products in the cart
  private shopCart: BehaviorSubject<Coffee[]> = new BehaviorSubject<Coffee[]>([]); // Here we will store the products in the cart
  public items = this.shopCart.asObservable();
  coffeeService: CoffeeService;
 
  constructor(coffeeService : CoffeeService){
    this.coffeeService = coffeeService;
    this.shopCart.next(this._shopCart);
   }

  /** 
   * Method to add a product to the cart.
   * @return void
   * @description Method to add a product to the cart.
   * @param {Coffee} coffee
   * @observable
   **/ 
  addProduct(coffee: Coffee) : void {
      let item = this._shopCart.find((element) => element.id === coffee.id);
      if (!item) {
        this._shopCart.push({...coffee}); // We use the spread operator to create a new object
      } else {
        item.quantity += coffee.quantity;
      }
      this.shopCart.next(this._shopCart); // We notify the subscribers that the cart has changed
    }

  /**
   * Method to clear the cart.
   * @return void
   * @description Method to clear the cart.
   * @param void
   * @observable
   **/ 
  clearCart() : void {
      for (let item of this._shopCart) {
        this.coffeeService.changeStock(item); // We restore the stock of the products
      }
      this._shopCart = [];
      this.shopCart.next(this._shopCart);
    }

  /**
   * Method to remove a product from the cart.
   * @return void
   * @description Method to remove a product from the cart.
   * @param {Coffee} coffee
   * @observable
   **/ 
  delProduct(coffee: Coffee) : void {
    let item = this._shopCart.find((element) => element.id === coffee.id);
    if (item) {
      this.coffeeService.changeStock(coffee);
      item.quantity -= coffee.quantity;
      if (item.quantity === 0) {
        this._shopCart = this._shopCart.filter((element) => element.id !== coffee.id);
      }
    }
    this.shopCart.next(this._shopCart);
  }

  /**
   * Method to calculate the total balance of the cart.
   * @return number
   * @description Method to calculate the total balance of the cart.
   * @param void
   * @observable
   **/ 
  calculateBalance() : number {
    return this._shopCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
}
