import { Injectable } from '@angular/core';
//import { CoffeeService } from './coffee.service';
import { Coffee } from '../models/Coffee';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoffeeService } from './coffee-shop-coffee.service';

@Injectable({
  providedIn: 'root', // This ensures that the service is provided in the root injector
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

  // Method to add a product to the cart.
  addProduct(coffee: Coffee) {
      let item = this._shopCart.find((element) => element.id === coffee.id);
      //console.log(item);
      if (!item) {
        this._shopCart.push({...coffee});
      } else {
        item.quantity += coffee.quantity;
      }
      this.shopCart.next(this._shopCart);
    }

  // Method to clear the cart.
  clearCart() {
      for (let item of this._shopCart) {
        this.coffeeService.changeStock(item);
      }
      this._shopCart = [];
      this.shopCart.next(this._shopCart);
    }

    // Method to remove a product from the cart.
  delProduct(coffee: Coffee) {
    //debugger;
    console.log(coffee.quantity);
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

  // Method to calculate the total balance of the cart.
  calculateBalance() : number {
    return this._shopCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
}
