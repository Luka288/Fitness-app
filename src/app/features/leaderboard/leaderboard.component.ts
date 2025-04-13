import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from '@angular/fire/auth';
import { userInterface } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-leaderboard',
  imports: [RouterModule, CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
})
export class LeaderboardComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  readonly user = inject(Auth);

  users = signal<userInterface[]>([]);

  ngOnInit(): void {
    this.users.set(this.activatedRoute.snapshot.data['users']);
  }
}
