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
    //this.balance = this.cartService.calculateBalance();
  }

  calculateBalance(products: any[]) : number{
    this.balance = 0; 
    for (let i = 0; i < products.length; i++) {
      console.log('item: '+products[i].price);
      this.balance += products[i].price;
    }
    console.log('balance. '+this.balance);
    return this.balance;
  }

  removeFromCart(product: any) {
    this.cartService.delProduct(product);
  }
}


