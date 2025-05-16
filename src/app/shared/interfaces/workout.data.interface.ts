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

export interface calculatedData extends userData {
  totalReps?: number;
  unit?: string;
}

export interface WorkoutData extends Partial<BaseWorkoutData> {}
