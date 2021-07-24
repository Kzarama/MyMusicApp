import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiSpotifyService } from '../../services/api-spotify.service';

import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass'],
})
export class LoadingComponent implements OnInit {
  user: IUser = {
    display_name: '',
    id: '',
    images: [{ url: '' }],
  };

  constructor(private router: Router, private apiSpotify: ApiSpotifyService) {}

  async ngOnInit() {
    await this.apiSpotify.getTokenFromURL();
    await this.apiSpotify.getAuthorizationToken();
    await this.apiSpotify.getUser();
    this.user = JSON.parse(localStorage.getItem('user') || '');
    this.router.navigateByUrl('/home');
  }
}
