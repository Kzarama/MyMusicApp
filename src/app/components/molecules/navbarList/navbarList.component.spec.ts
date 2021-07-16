import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarListComponent } from './navbarList.component';

describe('NavbarListComponent', () => {
  let component: NavbarListComponent;
  let fixture: ComponentFixture<NavbarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
});
