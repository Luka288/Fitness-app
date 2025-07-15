import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { calculatedData } from '../../interfaces/workout.data.interface';

@Component({
  selector: 'app-activity-info',
  imports: [CommonModule],
  templateUrl: './activity-info.component.html',
  styleUrl: './activity-info.component.scss',
})
export class ActivityInfoComponent {
  @Input({ alias: 'data' }) calculatedData!: calculatedData;
}
