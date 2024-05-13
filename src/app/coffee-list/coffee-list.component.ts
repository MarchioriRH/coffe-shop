import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.scss'
})
export class CoffeeListComponent {
  private cartService: CartService;
  coffees = [
    { name: 'Americano', type: "americano", price: 2.5, stock: 10, image: 'assets/img/americano.jpg'},
    { name: 'Cappuccino', type: "italiano", price: 3.5, stock: 5, image: 'assets/img/capuccino.jpg'},
    { name: 'Espresso', type: "italiano", price: 2.0, stock: 20, image: 'assets/img/espresso.jpg'},
    { name: 'Latte', type: "NY", price: 3.0, stock: 3, image: 'assets/img/latte.jpg'}
  ];
  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  addToCart(product: any) {
    this.cartService.addProduct(product);
    this.cartService.calculateBalance();
  }

}
