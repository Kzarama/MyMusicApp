import { Component, Input } from '@angular/core';

import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  @Input() user: IUser = {
    display_name: '',
    id: '',
    images: [],
  };

  constructor() {}
}
