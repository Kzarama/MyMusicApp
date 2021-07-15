import { Component, Input, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  @Input() user: user = {
    display_name: '',
    external_urls: {},
    followers: {},
    href: '',
    id: '',
    images: [],
    type: '',
    uri: '',
  };

  constructor() {}

  ngOnInit(): void {}

  mobileMenu(): void {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    }
  }
}
