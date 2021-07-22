import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarListComponent } from './navbar-list.component';

describe('NavbarListComponent', () => {
  let component: NavbarListComponent;
  let fixture: ComponentFixture<NavbarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavbarListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('attributes should be empty', () => {
    expect(component.user).toEqual({
      display_name: '',
      id: '',
      images: [{ url: '' }],
    });
  });
});
