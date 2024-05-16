import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { Coffee } from './Coffee';
import { CoffeeService } from '../coffee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.scss'
})
export class CoffeeListComponent {
  cartService: CartService;
  coffeeList$: Observable<Coffee[]>;
  
  constructor(cartService: CartService, coffeeService: CoffeeService) {  
    this.coffeeList$ = coffeeService.coffeeList.asObservable();
    this.cartService = cartService; 
  }
  
  // Method to get a list of products.
  ngOnInit() {
  }
  
  // Method to add a product to the cart.
  addToCart(coffee: Coffee) : void{
    if (coffee.stock <= 0 || coffee.quantity <= 0) {
      return;
    }
    this.cartService.addProduct(coffee);
    coffee.stock -= coffee.quantity;
    coffee.quantity = 0;
  }    

  maxReached(m : string) {
    alert(m);
  }
}

