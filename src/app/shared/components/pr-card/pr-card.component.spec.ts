import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrCardComponent } from './pr-card.component';

describe('PrCardComponent', () => {
  let component: PrCardComponent;
  let fixture: ComponentFixture<PrCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
