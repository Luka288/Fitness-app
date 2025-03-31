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

export interface WorkoutData extends Partial<BaseWorkoutData> {}
