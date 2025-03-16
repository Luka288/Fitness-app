import { Injectable } from '@angular/core';
import { headerBtns } from '../consts/header';
import { workoutTypes } from '../consts/workouts';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  workoutTypes() {
    return workoutTypes;
  }

  getHeaderButtons() {
    return headerBtns;
  }
}
