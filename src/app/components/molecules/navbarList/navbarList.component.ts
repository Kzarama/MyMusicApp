import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { user } from 'src/app/interfaces/user';

@Component({
  selector: 'app-navbarList',
  templateUrl: './navbarList.component.html',
  styleUrls: ['./navbarList.component.sass'],
})
export class NavbarListComponent implements OnInit {
  @Input() user: user = {
    display_name: '',
    id: '',
    images: [],
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

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
}
