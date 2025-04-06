export interface formDataInterface {
  distance: number;
  time: number;
  kg: number;
  reps: number;
  sets: number;
  timeUnit: string;
}

export interface userFormData extends Partial<formDataInterface> {}
