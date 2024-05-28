import { Injectable } from '@angular/core';
import { Coffee } from '../models/Coffee'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {  
  private _coffeeList: Coffee[] = []; // Here we will store the products in the cart
  private coffeeList: BehaviorSubject<Coffee[]> = new BehaviorSubject<Coffee[]>([]); 
  
  constructor() {
    this.coffeeList.next(this._coffeeList);
  }

  // Method to change the stock of a product.
  changeStock(coffee: Coffee, quantity: number = 0) {
    let item = this._coffeeList.find((element) => element.id === coffee.id);
    if (!item) {
      return;
    }
    if (quantity > 0) {
      item.stock += quantity;
    } else {
      item.stock += coffee.quantity;
    }
    this.coffeeList.next(this._coffeeList);
  }

  // Method to update the coffee list from the component
  updateCoffeeList(coffeeList: Coffee[]) {
    this._coffeeList = coffeeList;
    this.coffeeList.next(this._coffeeList);
  }
}
