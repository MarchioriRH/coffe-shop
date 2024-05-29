import { Component } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',  
})

export class AppComponent {
  title = 'Coffee-Shop';
  currentUrl: string; // Here we will store the current URL

  /**
   * Constructor of the class 
   * @description Constructor of the class
   * @observable
   * @param {Router} router
   */
  constructor(private router: Router) {
    this.currentUrl = window.location.href;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = window.location.href;
        this.currentUrl = this.currentUrl.replace('http://localhost:4200', '');
      }
    });
  }
}

