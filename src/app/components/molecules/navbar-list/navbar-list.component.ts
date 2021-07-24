import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-navbar-list',
  templateUrl: './navbar-list.component.html',
  styleUrls: ['./navbar-list.component.sass'],
})
export class NavbarListComponent {
  @Input() user: IUser = {
    display_name: '',
    id: '',
    images: [{ url: '' }],
  };

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigateByUrl(route);
    const hamburger = document.querySelector('.m-hamburger__container');
    const navMenu = document.querySelector('.m-nav_menu__list');
    if (hamburger && navMenu) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  }

  mobileMenu(): void {
    const hamburger = document.querySelector('.m-hamburger__container');
    const navMenu = document.querySelector('.m-nav_menu__list');
    if (hamburger && navMenu) {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
