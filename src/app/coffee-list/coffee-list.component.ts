import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Coffee } from './Coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.scss'
})
export class CoffeeListComponent {
  cartService: CartService;
  coffeeService: CoffeeService;
  coffees: Coffee[] = [];

  constructor(cartService: CartService, coffeeService: CoffeeService) {  
    this.cartService = cartService; 
    this.coffeeService = coffeeService;
  }

  // Method to get a list of products.
  ngOnInit() {
    this.coffees = CoffeeService.getCoffees();
  }

  // Method to add a product to the cart.
  addToCart(product: any) {
    if (product.stock <= 0) {
      return;
    }
    this.cartService.addProduct(product);
    this.coffees = this.coffeeService.changeStock(product, 'remove'); // Change the stock of the product
  }  
}

