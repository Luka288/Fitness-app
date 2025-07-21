import { BaseHeader } from '../interfaces/header.interface';

export const headerBtns: BaseHeader[] = [{ title: 'About' }];

export const sidePanel: BaseHeader[] = [
  { title: 'Home', href: '', icon: ['fa-solid', 'fa-house'] },
  {
    title: 'leaderboard',
    href: 'leaderboard',
    icon: ['fa-solid', 'fa-chart-simple'],
  },
  {
    title: 'Scanner',
    href: 'scanner',
    icon: ['fa-solid', 'fa-utensils'],
  },
];
