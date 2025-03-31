export interface BaseWorkoutData {
  distance: string;
  time: string;
  calories: string;
  reps: string;
  sets: string;
  weight: string;
}

export interface WorkoutData extends Partial<BaseWorkoutData> {}
