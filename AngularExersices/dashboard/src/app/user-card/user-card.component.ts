// src/app/user-card/user-card.component.ts
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  @Input() user: any;

  constructor(private router: Router) {}

  viewDetails(): void {
    this.router.navigate(['/user-details', this.user.id]);
  }
}
