import { Injectable } from '@angular/core';
import { headerBtns, sidePanel } from '../consts/header';
import { workoutTypes } from '../consts/workouts';
import { of } from 'rxjs';

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

  getSideNavItems() {
    return of(sidePanel);
  }
}
