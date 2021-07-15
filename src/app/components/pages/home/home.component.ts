import { Component, OnInit } from '@angular/core';
import {
  getAuthorizationToken,
  getTokenFromURL,
  getUser,
} from 'src/app/utils/login_spotify/login_spotify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: any;
  username: string = '';

  constructor() {}

  ngOnInit(): void {}

  async getUser() {
    getTokenFromURL();
    getAuthorizationToken();
    this.user = await getUser();
    this.username = this.user['display_name'];
  }
}
