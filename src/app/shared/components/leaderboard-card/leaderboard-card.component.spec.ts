import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardCardComponent } from './leaderboard-card.component';

describe('LeaderboardCardComponent', () => {
  let component: LeaderboardCardComponent;
  let fixture: ComponentFixture<LeaderboardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaderboardCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
