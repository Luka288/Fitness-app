import { Component, inject, Input, signal } from '@angular/core';
import { CalculateService } from '../../services/calculate.service';
import { calculatedData } from '../../interfaces/calculate.interface';
import { CommonModule } from '@angular/common';

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
