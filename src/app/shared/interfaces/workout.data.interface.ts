export interface BaseWorkoutData {
  activityName: string;
  distance: string;
  time: string;
  calories: string;
  reps: string;
  sets: string;
  weight: string;
  timeUnit: number;
  unit: string;
}

export interface userData {
  MET: string;
  activityName: string;
  burnedCalories: number;
  date: string;
  distance: number;
  speed: string;
  time: string;
  savedAt: string;
}

export interface WorkoutData extends Partial<BaseWorkoutData> {}

// MET: 'Vigorous';
// activityName: 'Morning Run';
// burnedCalories: 1002.225;
// date: '2025-04-09';
// distance: '10 KM';
// speed: 10;
// time: '1 HOUR';
