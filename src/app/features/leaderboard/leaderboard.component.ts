import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { LeaderboardCardComponent } from '../../shared/components/leaderboard-card/leaderboard-card.component';

@Component({
  selector: 'app-leaderboard',
  imports: [RouterModule, CommonModule, LeaderboardCardComponent],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
})
export class LeaderboardComponent {
  private readonly userService = inject(UserService);

  users = toSignal(this.userService.getAllUsers(), { initialValue: [] });

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(console.log);
  }

  userActivities(id: string) {}
}
