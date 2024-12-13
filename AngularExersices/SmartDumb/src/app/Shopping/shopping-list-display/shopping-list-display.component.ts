import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-display',
  template: `
    <ul>
      <li *ngFor="let item of items; let i = index">
        {{ item.name }} (x{{ item.quantity }})
        <button (click)="removeItem.emit(i)">Remove</button>
      </li>
    </ul>
    <button (click)="addNewItem()">Add Item</button>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class ShoppingListDisplayComponent {
  @Input() items: { name: string; quantity: number }[] = [];
  @Output() addItem = new EventEmitter<{ name: string; quantity: number }>();
  @Output() removeItem = new EventEmitter<number>();

  addNewItem() {
    const newItem = { name: 'Oranges', quantity: 1 };
    this.addItem.emit(newItem);
  }
}
