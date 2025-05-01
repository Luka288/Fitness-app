export interface WorkoutInterface {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: 'distance' | 'reps' | 'time';
  metrics: Array<string>;
}
