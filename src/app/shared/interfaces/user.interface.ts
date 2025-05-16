import { userData } from './workout.data.interface';

export interface userInterface {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
  totalBurned?: number;
  activities: userData[];
}
