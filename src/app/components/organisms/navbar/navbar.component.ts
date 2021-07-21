import { Component, Input } from '@angular/core';

import { user } from 'src/app/interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  @Input() user: user = {
    display_name: '',
    id: '',
    images: [],
  };

  constructor() {}
}
