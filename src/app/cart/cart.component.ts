import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart = [
    { name: 'Americano', quantity: 1, price: 2.5, total: 0 },
    { name: 'Cappuccino', quantity: 2, price: 5, total: 0 },
    { name: 'Espresso', quantity: 1, price: 2.5, total: 0 },

  ];

  constructor() {
  }
}



