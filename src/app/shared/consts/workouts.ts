import { WorkoutInterface } from '../interfaces/workout.interface';

export const workoutTypes: WorkoutInterface[] = [
  {
    id: 'morning_run',
    name: 'Morning run',
    icon: 'https://cdn-icons-png.flaticon.com/512/5358/5358147.png',
    type: 'distance',
    metrics: ['distance', 'time', 'calories'],
  },

  {
    id: 'push_ups',
    name: 'Push Ups',
    icon: 'https://cdn-icons-png.flaticon.com/512/2548/2548530.png',
    type: 'reps',
    metrics: ['reps', 'sets', 'calories'],
  },

  {
    id: 'plank_hold',
    name: 'Plank Hold',
    icon: 'https://cdn-icons-png.flaticon.com/512/5651/5651300.png',
    type: 'time',
    metrics: ['time', 'calories'],
  },

  {
    id: 'bodyweight_squats',
    name: 'Bodyweight Squats',
    icon: 'https://www.fitstream.com/images/bodyweight-training/bodyweight-exercises/bodyweight-squat.png',
    type: 'reps',
    metrics: ['reps', 'sets', 'calories'],
  },

  {
    id: 'pull_up',
    name: 'Pull Up',
    icon: 'https://cdn-icons-png.flaticon.com/128/3043/3043199.png',
    type: 'reps',
    metrics: ['reps', 'sets', 'calories'],
  },

  {
    id: 'cycling',
    name: 'Cycling',
    icon: 'https://cdn-icons-png.flaticon.com/512/3600/3600996.png',
    type: 'distance',
    metrics: ['distance', 'time', 'calories'],
  },
];
