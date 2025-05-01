import { Injectable } from '@angular/core';
import { nutrimentData } from '../interfaces/food.interface';
import Chart from 'chart.js/auto';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private lineChartInstance?: Chart;
  private doughnutChartInstance?: Chart;

  doughnutChart(ctx: CanvasRenderingContext2D, data: nutrimentData) {
    this.doughnutChartInstance?.destroy();

    const rawData = [
      { label: 'Fat', value: data.fat, color: '#f87171' },
      { label: 'Carbohydrates', value: data.carbohydrates, color: '#60a5fa' },
      { label: 'Protein', value: data.proteins, color: '#34d399' },
      { label: 'Sugars', value: data.sugars, color: '#fbbf24' },
      { label: 'Salt', value: data.salt, color: '#e11d48' },
      { label: 'Fiber', value: data.energyKcal, color: '#9333ea' },
      { label: 'Processing Level', value: data.novaGroup, color: '#f43f5e' },
      {
        label: 'Processing (100g)',
        value: data.novaGroup100g,
        color: '#fb923c',
      },
      {
        label: 'Processing/Serving',
        value: data.novaGroupServing,
        color: '#facc15',
      },
      { label: 'Nutri-Score', value: data.nutritionScoreFr, color: '#22c55e' },
      {
        label: 'Nutri-Score 100g',
        value: data.nutritionScoreFr100g,
        color: '#3b82f6',
      },
    ];

    const filtered = rawData.filter((item) => item.value > 0);
    const labels = filtered.map((item) => item.label);
    const chartData = filtered.map((item) => item.value);
    const backgroundColors = filtered.map((item) => item.color);

    return new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [
          {
            data: chartData,
            backgroundColor: backgroundColors,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: '50%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#4b5563',
            },
          },
        },
      },
    });
  }

  lineChart(ctx: CanvasRenderingContext2D, labels: string[], data: number[]) {
    return new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Burned KCAL',
            data: data,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: 'black',
            pointBorderColor: 'rgba(255, 99, 132, 1)',
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            title: {
              //
              position: 'center',
              display: false,
              text: 'Activity Summary (Last 7 Activity)',
            },
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: false,
              text: 'Last 7 activity data',
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Last 7 activity data',
            },
            beginAtZero: true,
          },
        },
      },
    });
  }
}
