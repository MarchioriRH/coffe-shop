import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeShopAboutComponent } from './coffee-shop-about.component';

describe('CoffeeShopAboutComponent', () => {
  let component: CoffeeShopAboutComponent;
  let fixture: ComponentFixture<CoffeeShopAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeeShopAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeShopAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
