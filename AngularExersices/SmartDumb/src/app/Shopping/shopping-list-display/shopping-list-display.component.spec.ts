import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListDisplayComponent } from './shopping-list-display.component';

describe('ShoppingListDisplayComponent', () => {
  let component: ShoppingListDisplayComponent;
  let fixture: ComponentFixture<ShoppingListDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingListDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
