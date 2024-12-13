import { Component } from '@angular/core';
import { ShoppingListDisplayComponent } from '../shopping-list-display/shopping-list-display.component';

@Component({
  selector: 'app-shopping-list',
  template: `
    <app-shopping-list-display
      [items]="items"
      (addItem)="onAddItem($event)"
      (removeItem)="onRemoveItem($event)"
    ></app-shopping-list-display>
  `,
  standalone: true,
  imports: [ShoppingListDisplayComponent],
})
export class ShoppingListComponent {
  items = [
    { name: 'Apples', quantity: 3 },
    { name: 'Bananas', quantity: 2 },
  ];

  onAddItem(newItem: { name: string; quantity: number }) {
    this.items.push(newItem);
  }

  onRemoveItem(index: number) {
    this.items.splice(index, 1);
  }
}
