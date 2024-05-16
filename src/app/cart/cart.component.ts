import { Component, Inject } from '@angular/core';
import { CartService } from '../cart.service';
import { Coffee } from '../coffee-list/Coffee';
import { Observable } from 'rxjs';
import { MdbModalService } from 'mdb-angular-ui-kit/modal'; // Add this line

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart$: Observable<Coffee[]>;
  cartService: CartService;

  constructor(cartService: CartService, @Inject(MdbModalService) private modalService: MdbModalService) {
    this.cart$ = cartService.shopCart.asObservable();
    this.cartService = cartService;
    this.modalService = modalService;
  }

  openModal() {
    this.modalService.open(CartComponent);
  }


  // Method to calculate the total balance of the cart.
  calculateBalance() : number{
    return this.cartService.calculateBalance();
  }

  // Method to remove a product from the cart.
  removeFromCart(coffee: Coffee) {
    this.cartService.delProduct(coffee);
  }

  // Method to clear the cart.
  clearCart() {
    this.cartService.clearCart();
  }
}


