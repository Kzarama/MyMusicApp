import { Component, Input } from '@angular/core';

import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass'],
})
export class UserInfoComponent {
  @Input() user: IUser = {
    display_name: '',
    id: '',
    images: [{ url: '' }],
  };

  constructor() {}
}
