import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeShopCoffeesComponent } from './coffee-shop-coffees.component';

describe('CoffeeShopCoffeesComponent', () => {
  let component: CoffeeShopCoffeesComponent;
  let fixture: ComponentFixture<CoffeeShopCoffeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeeShopCoffeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeShopCoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
