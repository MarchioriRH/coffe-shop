import { Injectable } from '@angular/core';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  // Declare the products array with the correct type
  products: CoffeeListComponent[] = [];

  // Este método añade un producto al carrito
  addProduct(product: CoffeeListComponent) {
    this.products.push(product);
  }

  // Este método devuelve los productos en el carrito
  getProducts() {
    return this.products;
  }

  // Este método elimina un producto del carrito
  removeProduct(product) {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }
}