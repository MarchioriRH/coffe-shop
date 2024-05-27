import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeShopBuyQuantityInputComponent } from './coffee-shop-buy-quantity-input.component';

describe('CoffeeShopBuyQuantityInputComponent', () => {
  let component: CoffeeShopBuyQuantityInputComponent;
  let fixture: ComponentFixture<CoffeeShopBuyQuantityInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeeShopBuyQuantityInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeShopBuyQuantityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
