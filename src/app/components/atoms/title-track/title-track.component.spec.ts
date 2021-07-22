import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTrackComponent } from './title-track.component';

describe('TitleTrackComponent', () => {
  let component: TitleTrackComponent;
  let fixture: ComponentFixture<TitleTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleTrackComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('attributes should be empty', () => {
    expect(component.artists).toEqual([]);
    expect(component.title).toEqual('');
  });
});
