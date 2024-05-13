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
  balance = 0;
  
  constructor(cartService: CartService) {
    this.cartService = cartService;
    this.products = this.cartService.getProducts();
  }

  calculateBalance() : number{
    return this.cartService.calculateBalance();
  }

  removeFromCart(product: any) {
    this.cartService.delProduct(product);
  }
}


