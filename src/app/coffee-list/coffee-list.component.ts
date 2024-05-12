import { Component } from '@angular/core';
//import { CartService } from '../cart.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.scss'
})
export class CoffeeListComponent {
  coffees = [
    { name: 'Americano', type: "americano", price: 2.5, stock: 10, image: 'assets/img/americano.jpg'},
    { name: 'Cappuccino', type: "italiano", price: 3.5, stock: 5, image: 'assets/img/capuccino.jpg'},
    { name: 'Espresso', type: "italiano", price: 2.0, stock: 20, image: 'assets/img/espresso.jpg'},
    { name: 'Latte', type: "NY", price: 3.0, stock: 3, image: 'assets/img/latte.jpg'}
  ];

  // addToCart(coffee) {
  //   coffee.stock--;
  //   this.cart.total += coffee.price;
  //   let item = this.cart.items.find(item => item.coffee.name === coffee.name);
  //   if (item) {
  //     item.quantity++;
  //   } else {
  //     this.cart.items.push({ coffee: coffee, quantity: 1 });
  //   }
  // }
}
