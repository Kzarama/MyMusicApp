import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}

  mobileMenu(): void {
    const hamburger = document.querySelector('.m-hamburger__container');
    const navMenu = document.querySelector('.m-nav_menu__list');
    if (hamburger && navMenu) {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    }
  }
}
