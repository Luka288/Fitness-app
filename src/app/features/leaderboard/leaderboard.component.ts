import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-leaderboard',
  imports: [RouterModule, CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
})
export class LeaderboardComponent {
  private readonly userService = inject(UserService);
  readonly user = inject(Auth);

  users = toSignal(this.userService.getAllUsers(), { initialValue: [] });

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(console.log);
  }
}
