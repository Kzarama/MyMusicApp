import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackComponent } from './track.component';

describe('TrackComponent', () => {
  let component: TrackComponent;
  let fixture: ComponentFixture<TrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('attributes should be empty', () => {
    expect(component.track).toEqual({
      name: '',
      album: { images: [{ url: '' }] },
      artists: [],
    });
  });
});
