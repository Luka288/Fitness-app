import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from '@angular/fire/auth';
import { userPublicData } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-leaderboard',
  imports: [RouterModule, CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
})
export class LeaderboardComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  readonly user = inject(Auth);

  users = signal<userPublicData[]>([]);

  ngOnInit(): void {
    const userDatas = this.activatedRoute.snapshot.data[
      'users'
    ] as userPublicData[];
    const sortedUsers = userDatas.sort(
      (a, b) => a.burnedCalories + b.burnedCalories
    );

    this.users.set(sortedUsers);
  }
}
