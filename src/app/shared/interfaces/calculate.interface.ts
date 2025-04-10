export interface calculatedData {
  activityName: string;
  // აზიდვები...
  totalReps?: number;
  // სირბილი, ველოსიპედით სიარული
  MET?: number;
  speed?: number;
  // საერთო მეტრაჟი
  burnedCalories?: number;
  time?: string;
  distance: string;
}

export interface calculatedData2 {
  totalReps?: number;
  calories?: number;
  speed?: number;
  burnedCalories?: number;
  MET?: number;
  time?: string;
}
