import { userData } from './workout.data.interface';

export interface userPrivateData {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
  totalBurned?: number;
  activities: userData[];
}

export interface userPublicData {
  activities: number;
  burnedCalories: number;
  userImage: string;
  username: string;
}
