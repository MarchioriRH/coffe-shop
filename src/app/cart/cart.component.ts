import { Component, Inject } from '@angular/core';
import { CartService } from '../cart.service';
import { Coffee } from '../coffee-list/Coffee';
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent {
  cart$: Observable<Coffee[]>;
  cartService: CartService;
  bsModalRef: BsModalRef;


  constructor(cartService: CartService, private modalService: BsModalService) {
    this.cart$ = cartService.shopCart.asObservable();
    this.cartService = cartService;
  }

  openModal() {
    this.bsModalRef = this.modalService.show(BsModalComponent);
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


