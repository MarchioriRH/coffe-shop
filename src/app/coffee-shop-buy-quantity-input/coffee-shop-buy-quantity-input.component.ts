import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coffee } from '../coffee-list/Coffee';

@Component({
  selector: 'app-coffee-shop-buy-quantity-input',
  templateUrl: './coffee-shop-buy-quantity-input.component.html',
  styleUrl: './coffee-shop-buy-quantity-input.component.scss'
})
export class CoffeeShopBuyQuantityInputComponent implements OnInit{
  
  constructor() { }
  
  @Input()
  quantity: number = 0;

  @Input()
  max: number = 0;
  
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();
  // @Output() custom: EventEmitter<number> = new EventEmitter<number>();
  
  
  ngOnInit(): void {
  }

  upQuantity() : void {
    if(this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit('Se alcanzó el máximo de stock: ' + this.max);
    }
    // this.custom.emit(coffee.quantity);
  }

  downQuantity() : void {
    if(this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    } else {
      this.quantity = 0;
    }
  }
  
  changeQuantity(event: any): void {  
    let inputValue = event.target.value;
    if (!/^\d*$/.test(inputValue)) {
      // Si el valor de entrada no es un número, borra el último carácter ingresado
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
