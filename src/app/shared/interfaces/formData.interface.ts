export interface formDataInterface {
  distance: number;
  time: number;
  kg: number;
  reps: number;
  sets: number;
  timeUnit: string;
  unit: string;
  effort: 'MAXIMUM' | 'MODERATE' | 'LIGHT';
}

export interface userFormData extends Partial<formDataInterface> {}
