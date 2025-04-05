import { Component, Input } from '@angular/core';
import { userInterface } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leaderboard-card',
  imports: [CommonModule],
  templateUrl: './leaderboard-card.component.html',
  styleUrl: './leaderboard-card.component.scss',
})
export class LeaderboardCardComponent {
  @Input({ alias: 'userData' }) user: userInterface | undefined;
}
