import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeShopContactComponent } from './coffee-shop-contact.component';

describe('CoffeeShopContactComponent', () => {
  let component: CoffeeShopContactComponent;
  let fixture: ComponentFixture<CoffeeShopContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeeShopContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeShopContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
