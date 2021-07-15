import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces/user';
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
  constructor() {}

  ngOnInit() {}

  async getUser() {}
}
