import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/app/services/spotifyApi';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(): void {
    login();
  }

  register(): void {
    window.location.href = 'https://www.spotify.com/bo/signup/';
  }
}
