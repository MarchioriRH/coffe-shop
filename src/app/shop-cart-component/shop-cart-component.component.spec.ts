import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCartComponentComponent } from './shop-cart-component.component';

describe('ShopCartComponentComponent', () => {
  let component: ShopCartComponentComponent;
  let fixture: ComponentFixture<ShopCartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopCartComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopCartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
