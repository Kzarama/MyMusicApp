import { Component } from '@angular/core';

import { login } from 'src/app/services/spotifyApi';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  constructor() {}

  login(): void {
    login();
  }
}
