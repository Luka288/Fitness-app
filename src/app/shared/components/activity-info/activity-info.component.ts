import { Component, inject, Input, signal } from '@angular/core';
import { CalculateService } from '../../services/calculate.service';
import { CommonModule } from '@angular/common';
import { calculatedData } from '../../interfaces/workout.data.interface';

@Component({
  selector: 'app-activity-info',
  imports: [CommonModule],
  templateUrl: './activity-info.component.html',
  styleUrl: './activity-info.component.scss',
})
export class ActivityInfoComponent {
  private readonly calculateService = inject(CalculateService);

  @Input({ alias: 'data' }) calculatedData!: calculatedData;
}
