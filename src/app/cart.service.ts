import { Injectable } from '@angular/core';
import { CoffeeService } from './coffee.service';

@Injectable({
  providedIn: 'root', // This ensures that the service is provided in the root injector
})
export class CartService {
  private products: any[] = []; // Here we will store the products in the cart
  private balances: number[] = []; // Here we will store the prices of the products in the cart
  private coffeeService: CoffeeService; 
 

  constructor(coffeeService : CoffeeService) {
    this.coffeeService = coffeeService;
  }

  // Method to add a product to the cart.
  addProduct(product: any) {
    // Lógica para agregar un producto al carrito
    if (product.stock <= 0) {
      return;
    }
    this.products.push(product);
    this.balances.push(product.price);
  }

  // Method to remove a product from the cart.
  delProduct(product: any) {
    const productIndex = this.products.indexOf(product);
    const balanceIndex = this.balances.indexOf(product.price);
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
      this.balances.splice(balanceIndex, 1);
    }    
    this.coffeeService.changeStock(product, 'add');
  }

  // Method to get a list of products.  
  getProducts(): any[] {
    return this.products;
  }

  // Method to calculate the total balance of the cart.
  calculateBalance() : number {
    let balance = 0;
    for(let i = 0; i < this.balances.length; i++) {
      balance += this.balances[i];
    }
    return balance;
  }

  // Method to clear the cart.
  clearCart() {
    for(let i = 0; i < this.products.length; i++) {
      this.coffeeService.changeStock(this.products[i], 'add');
    }
    this.products = [];
    this.balances = [];
  }
}
