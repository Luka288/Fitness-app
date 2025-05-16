import { Component, Input } from '@angular/core';
import {
  calculatedData,
  userData,
} from '../../interfaces/workout.data.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pr-card',
  imports: [CommonModule],
  templateUrl: './pr-card.component.html',
  styleUrl: './pr-card.component.scss',
})
export class PrCardComponent {
  @Input() personalBest: calculatedData | null = null;
}
