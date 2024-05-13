import { Injectable } from '@angular/core';
//import { CoffeeListComponent } from './coffee-list/coffee-list.component';

@Injectable({
  providedIn: 'root', // Esto asegura que el servicio esté disponible en toda la aplicación
})
export class CartService {
  private products: any[] = []; // Aquí almacenaremos los product en el carrito
  private balances: number[] = [];
  balance = 0; // Aquí almacenaremos el saldo total del carrito

  constructor() {}

  addProduct(product: any) {
    // Lógica para agregar un producto al carrito
    this.products.push(product);
    //this.balance += product.price; // Asume que cada producto tiene una propiedad "precio"
    this.balances.push(product.price);
    //console.log('Cart service: ' + this.balance);
  }

  delProduct(product: any) {
    // Lógica para quitar un producto del carrito
    const productIndex = this.products.indexOf(product);
    const balanceIndex = this.balances.indexOf(product.price);
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
      this.balances.splice(balanceIndex, 1);
    }
  }

  getProducts(): any[] {
    // Retorna la lista de product en el carrito
    return this.products;
  }

  calculateBalance() : number {
    // // Lógica para calcular el saldo total del carrito  
    this.balance = 0;
    for(let i = 0; i < this.balances.length; i++) {
      this.balance += this.balances[i];
    }
    console.log('Cart service 1: ' + this.balance); 
    // return this.balances;
    return this.balance;
  }
}
