import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingListComponent } from './Shopping/shopping-list/shopping-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShoppingListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SmartDumb';
}
