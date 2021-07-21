import { Component } from '@angular/core';

import { ApiSpotifyService } from '../../services/api-spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  constructor(private apiSpotify: ApiSpotifyService) {}

  login(): void {
    this.apiSpotify.login();
  }
}
