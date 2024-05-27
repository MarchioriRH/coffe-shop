import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeShopFooterComponent } from './coffee-shop-footer.component';

describe('CoffeeShopFooterComponent', () => {
  let component: CoffeeShopFooterComponent;
  let fixture: ComponentFixture<CoffeeShopFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeeShopFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeShopFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
