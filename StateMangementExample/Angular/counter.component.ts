import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <p>Count: {{ count }}</p>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
  `,
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
