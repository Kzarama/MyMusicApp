import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTemplateComponent } from './home-template.component';

describe('HomeTemplateComponent', () => {
  let component: HomeTemplateComponent;
  let fixture: ComponentFixture<HomeTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeTemplateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('attributes should be empty', () => {
    expect(component.loading).toEqual(false);
    expect(component.tracks).toEqual({
      items: [],
      next: '',
      previous: '',
    });
  });
});
