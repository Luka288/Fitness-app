import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
import { ChartService } from '../services/chart.service';
import { Chart } from 'chart.js';

@Directive({
  selector: '[appLineChart]',
})
export class LineChartDirective {
  @Input() labels: string[] = [];
  @Input() data: number[] = [];

  private currentChart: Chart | null = null;

  constructor(
    private el: ElementRef<HTMLCanvasElement>,
    private chartService: ChartService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.labels.length === 0 || this.data.length === 0) return;

    const ctx = this.el.nativeElement.getContext('2d');
    if (!ctx) return;

    if (this.currentChart) return;

    this.currentChart = this.chartService.lineChart(
      ctx,
      this.labels,
      this.data
    );
  }
}
