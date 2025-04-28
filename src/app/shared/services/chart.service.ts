import { Injectable } from '@angular/core';
import { nutrimentData } from '../interfaces/food.interface';
import Chart from 'chart.js/auto';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  doughnutChart(ctx: CanvasRenderingContext2D, data: nutrimentData) {
    const labels = [
      data.fat > 0 ? 'Fat' : null,
      data.carbohydrates > 0 ? 'Carbohydrates' : null,
      data.proteins > 0 ? 'Protein' : null,
      data.sugars > 0 ? 'Sugars' : null,
      data.salt > 0 ? 'Salt' : null,
      data.energyKcal > 0 ? 'Fiber' : null,
      data.novaGroup > 0 ? 'Processing Level' : null,
      data.novaGroup100g > 0 ? 'Processing (100g)' : null,
      data.novaGroupServing > 0 ? 'Processing/Serving' : null,
      data.nutritionScoreFr > 0 ? 'Nutri-Score' : null,
      data.nutritionScoreFr100g > 0 ? 'Nutri-Score 100g' : null,
    ].filter(Boolean) as string[];

    const chartData = [
      data.fat > 0 ? data.fat : null,
      data.carbohydrates > 0 ? data.carbohydrates : null,
      data.proteins > 0 ? data.proteins : null,
      data.sugars > 0 ? data.sugars : null,
      data.salt > 0 ? data.salt : null,
      data.energyKcal > 0 ? data.energyKcal : null,
      data.novaGroup > 0 ? data.novaGroup : null,
      data.novaGroup100g > 0 ? data.novaGroup100g : null,
      data.novaGroupServing > 0 ? data.novaGroupServing : null,
      data.nutritionScoreFr > 0 ? data.nutritionScoreFr : null,
      data.nutritionScoreFr100g > 0 ? data.nutritionScoreFr100g : null,
    ];

    const backgroundColors = [
      // ძირითადი ინფო
      '#f87171',
      '#60a5fa',
      '#34d399',
      '#fbbf24',
      '#e11d48',
      '#9333ea',
      // ნოვა გრუპი
      '#f43f5e',
      '#fb923c',
      '#facc15',
      '#22c55e',
      '#3b82f6',
    ];

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
}
