
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/coffee-shop-cart.service';
import { Coffee } from '../../models/Coffee';
import { CoffeeService } from '../../services/coffee-shop-coffee.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CoffeeDataService } from '../../services/coffee-shop-data.service';

// import $ from 'jquery';
// import * as bootstrap from 'bootstrap';

declare var $: any;

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-shop-list.component.html',
  styleUrl: './coffee-shop-list.component.scss'
})

export class CoffeeListComponent implements OnInit, OnDestroy{
  coffeeList$: Coffee[] = [];
  coffeeList: BehaviorSubject<Coffee[]> = new BehaviorSubject<Coffee[]>([]); 
  public items = this.coffeeList.asObservable();
  message : string = "";
  
  private subscription: Subscription = new Subscription;   

  constructor(private cartService: CartService, private coffeeDataService: CoffeeDataService, 
    private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.subscription = this.coffeeDataService.getAll().subscribe((data) => {
      this.coffeeList$ = data;
      this.coffeeList$.forEach((element) => element.quantity = 0);
      this.coffeeList.next(this.coffeeList$);
      this.coffeeService.updateCoffeeList(this.coffeeList$);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
    
  // Method to add a product to the cart.
  addToCart(coffee: Coffee) : void{
    if (coffee.stock <= 0 || coffee.quantity <= 0) {
      return;
    }    
    this.cartService.addProduct(coffee);
    coffee.stock -= coffee.quantity;
    coffee.quantity = 0;
  }    
  
  // Method to show messagge when product stock is 0.
  maxReached(m : string) : void{
    this.message = m;
    $('#maxReachedModal').modal('toggle');
  }  
}

