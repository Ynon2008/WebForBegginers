// src/app/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  users$: Observable<User[]> = new Observable();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.fetchUsers();
    this.users$ = this.userService.users$;
  }
}
