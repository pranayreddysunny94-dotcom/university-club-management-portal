
import { TestBed } from '@angular/core/testing';
import { JoinClub } from './join-club';

describe('JoinClub', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinClub]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(JoinClub);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
