import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private cartService: CartService;
  products: any[] = [];
  
  constructor(cartService: CartService) {
    this.cartService = cartService;
    this.products = this.cartService.getProducts();
  }

  // Method to calculate the total balance of the cart.
  calculateBalance() : number{
    return this.cartService.calculateBalance();
  }

  // Method to remove a product from the cart.
  removeFromCart(product: any) {
    this.cartService.delProduct(product);
  }

  // Method to clear the cart.
  clearCart() {
    this.cartService.clearCart();
    this.products = this.cartService.getProducts();
  }
}


