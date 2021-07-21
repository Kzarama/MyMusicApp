import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { user } from 'src/app/interfaces/user';

@Component({
  selector: 'app-navbar-list',
  templateUrl: './navbar-list.component.html',
  styleUrls: ['./navbar-list.component.sass'],
})
export class NavbarListComponent {
  @Input() user: user = {
    display_name: '',
    id: '',
    images: [],
  };

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
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
    this.router.navigate(['./login']);
  }
}