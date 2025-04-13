import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { leaderboardResolver } from './leaderboard.resolver';

describe('leaderboardResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => leaderboardResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
