import { Directive, ElementRef, Input } from '@angular/core';
import { nutrimentData } from '../interfaces/food.interface';
import { ChartService } from '../services/chart.service';

@Directive({
  selector: '[appChart]',
})
export class ChartDirective {
  @Input() nutritionData: nutrimentData | null = null;

  constructor(
    private el: ElementRef<HTMLCanvasElement>,
    private chartService: ChartService
  ) {}

  ngAfterViewInit(): void {
    const ctx = this.el.nativeElement.getContext('2d');
    if (!this.nutritionData || !ctx) return;

    this.chartService.doughnutChart(ctx, this.nutritionData);
  }
}
