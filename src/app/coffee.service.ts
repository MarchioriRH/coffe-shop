import { Injectable } from '@angular/core';
import { Coffee } from './coffee-list/Coffee';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {  
  private _coffeeList: Coffee[] = []; // Here we will store the products in the cart
  coffeeList: BehaviorSubject<Coffee[]> = new BehaviorSubject<Coffee[]>([]); 


  constructor() {
    this._coffeeList = CoffeeService.getCoffees();
    this.coffeeList.next(this._coffeeList);
  }

  
  // Method to get a mockup of products.
  static getCoffees() : Coffee [] {
    return [
      { id: 1, name: 'Americano', type: "americano", price: 2.5, stock: 10, image: 'assets/img/americano.jpg', clearance: false, quantity: 0},
      { id: 2, name: 'Cappuccino', type: "italiano", price: 3.5, stock: 5, image: 'assets/img/capuccino.jpg', clearance: true, quantity: 0},
      { id: 3, name: 'Espresso', type: "italiano", price: 2.0, stock: 20, image: 'assets/img/espresso.jpg', clearance: false, quantity: 0},
      { id: 4, name: 'Latte', type: "NY", price: 3.0, stock: 3, image: 'assets/img/latte.jpg', clearance: false, quantity: 0}
    ];
  }

  // Method to change the stock of a product.
  changeStock(coffee: Coffee) {
    let item = this._coffeeList.find((element) => element.id === coffee.id);
    if (!item) {
      return;
    }
    item.stock += coffee.quantity;
    this.coffeeList.next(this._coffeeList);
  }
}
