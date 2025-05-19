import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooleanService {
  enablePanel = new BehaviorSubject<boolean>(true);
  forgotPasswordToggle = new BehaviorSubject<boolean>(false);
}
