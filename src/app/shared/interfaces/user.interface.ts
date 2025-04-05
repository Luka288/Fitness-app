import { WorkoutData } from './workout.data.interface';

export interface userInterface {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
  activities: WorkoutData[];
}
