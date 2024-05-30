/**
 * @description This component is used to manage the quantity of products to buy.
 * @class CoffeeShopBuyQuantityInputComponent
 * @implements OnInit
 */

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-coffee-shop-buy-quantity-input',
  templateUrl: './coffee-shop-buy-quantity-input.component.html',
  styleUrl: './coffee-shop-buy-quantity-input.component.scss'
})

export class CoffeeShopBuyQuantityInputComponent implements OnInit{
  private MAXREACHEDMESSAGE: string = 'Se alcanzó el máximo disponible: ';
  
  constructor() { }
  
  @Input()
  quantity: number = 0;

  @Input()
  max: number = 0;
  
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();
  
  ngOnInit(): void { }

  /** 
   * Increment quantity in number input of quantity selector.
   * @return void
   * @description Increment quantity in number input of quantity selector.
   * @param void
   **/ 
  upQuantity() : void {
    if(this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit(this.MAXREACHEDMESSAGE + this.max);
    }
  }

  /** 
  * Decrement quantity in number input of quantity selector.
  * @return void
  * @description Decrement quantity in number input of quantity selector.
  * @param void
  */   
  downQuantity() : void {
    if(this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    } else {
      this.quantity = 0;
    }
  }
  
  /** 
   * Change quantity and format the input
   * @return void
   * @description Change quantity and format the input
   * @param {event} event
  */
  changeQuantity(event: any): void {  
    let inputValue = event.target.value;
    if (!/^\d*$/.test(inputValue)) {
      // If the input value is not a number, delete the last entered character
      this.quantity = inputValue.slice(0, -1);
    } else if(inputValue > this.max) {      
      this.quantity = this.max;
    } else if(inputValue < 0) {
      this.quantity = 0;
    } else {
      this.quantity = inputValue;
    }
    this.quantityChange.emit(this.quantity);
  }
}
