import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Coffee } from './Coffee';
import { CoffeeService } from '../../services/coffee.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CoffeeDataService } from '../coffee-data.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.scss'
})
export class CoffeeListComponent implements OnInit, OnDestroy{
  cartService: CartService;
  coffeeList$: Coffee[] = [];
  coffeeList: BehaviorSubject<Coffee[]> = new BehaviorSubject<Coffee[]>([]); 

  private subscription: Subscription = new Subscription;
  
  constructor(cartService: CartService, private coffeeDataService: CoffeeDataService) {  
    //this.coffeeList$ = coffeeService.coffeeList.asObservable();
    this.cartService = cartService; 
  }

  ngOnInit() {
    console.log("init");
    this.subscription = this.coffeeDataService.getAll().subscribe((data) => {
      this.coffeeList$ = data;
      this.coffeeList$.forEach((element) => element.quantity = 0);
      this.coffeeList.next(this.coffeeList$);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  
  // Method to get a list of products.
  // ngOnInit() {
  //   this.cartService.items.subscribe((data) => {
  //     this.coffeeList = data});
  // } 
  

  
  // Method to add a product to the cart.
  addToCart(coffee: Coffee) : void{
    if (coffee.stock <= 0 || coffee.quantity <= 0) {
      return;
    }
    this.cartService.addProduct(coffee);
    coffee.stock -= coffee.quantity;
    coffee.quantity = 0;
  }    

  maxReached(m : string) {
    alert(m);
  }
}

