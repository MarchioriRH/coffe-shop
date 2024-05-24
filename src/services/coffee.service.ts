import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Coffee } from '../app/coffee-list/Coffee';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CoffeeDataService } from '../app/coffee-data.service';
import { CoffeeListComponent } from '../app/coffee-list/coffee-list.component';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {  
  private _coffeeList: Coffee[] = []; // Here we will store the products in the cart
  coffeeList: BehaviorSubject<Coffee[]> = new BehaviorSubject<Coffee[]>([]); 
  public items = this.coffeeList.asObservable();

  suscription: Subscription = new Subscription;

  constructor(coffeeListComponent: CoffeeListComponent) {
    this.suscription = coffeeListComponent.items.subscribe((data) => {
      this._coffeeList = data;
      this.coffeeList.next(this._coffeeList);
    });
  }

  // Method to change the stock of a product.
  changeStock(coffee: Coffee) {
    console.log("changeStock", this._coffeeList)
    let item = this._coffeeList.find((element) => element.id === coffee.id);
    if (!item) {
      return;
    }
    item.stock += coffee.quantity;
    this.coffeeList.next(this._coffeeList);
  }

  // Method to update the coffee list from the component
  updateCoffeeList(coffeeList: Coffee[]) {
    this._coffeeList = coffeeList;
    this.coffeeList.next(this._coffeeList);
  }
}
