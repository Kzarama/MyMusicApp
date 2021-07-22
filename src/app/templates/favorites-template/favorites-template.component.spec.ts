import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesTemplateComponent } from './favorites-template.component';

describe('FavoritesTemplateComponent', () => {
  let component: FavoritesTemplateComponent;
  let fixture: ComponentFixture<FavoritesTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesTemplateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesTemplateComponent);
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
