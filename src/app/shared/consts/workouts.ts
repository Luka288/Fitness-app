import { WorkoutInterface } from '../interfaces/workout.interface';

export const workoutTypes: WorkoutInterface[] = [
  {
    id: 'morning_run',
    name: 'Morning run',
    description: 'Cardio',
    icon: 'https://cdn-icons-png.flaticon.com/512/5358/5358147.png',
    type: 'distance',
    metrics: ['distance', 'time', 'kg'],
  },

  {
    id: 'push_ups',
    name: 'Push Ups',
    description: 'Upper body strength',
    icon: 'https://cdn-icons-png.flaticon.com/512/2548/2548530.png',
    type: 'reps',
    metrics: ['reps', 'sets', 'kg'],
  },

  {
    id: 'plank_hold',
    name: 'Plank Hold',
    description: 'Core strength',
    icon: 'https://cdn-icons-png.flaticon.com/512/5651/5651300.png',
    type: 'time',
    metrics: ['time', 'kg'],
  },

  {
    id: 'bodyweight_squats',
    name: 'Bodyweight Squats',
    description: 'Lower body strength',
    icon: 'https://www.fitstream.com/images/bodyweight-training/bodyweight-exercises/bodyweight-squat.png',
    type: 'reps',
    metrics: ['reps', 'sets', 'kg'],
  },

  {
    id: 'pull_up',
    name: 'Pull Up',
    description: 'Back & biceps',
    icon: 'https://cdn-icons-png.flaticon.com/128/3043/3043199.png',
    type: 'reps',
    metrics: ['reps', 'sets', 'kg'],
  },

  {
    id: 'cycling',
    name: 'Cycling',
    description: 'Cardio & endurance',
    icon: 'https://cdn-icons-png.flaticon.com/512/3600/3600996.png',
    type: 'distance',
    metrics: ['distance', 'kg', 'time'],
  },

  {
    id: 'sparring',
    name: 'Sparring',
    description: 'Combat training & endurance',
    icon: '',
    type: 'time',
    metrics: ['time', 'kg', 'effort'],
  },
];
