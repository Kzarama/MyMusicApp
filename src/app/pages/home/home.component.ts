import { Component, OnInit } from '@angular/core';

import { ApiSpotifyService } from '../../services/api-spotify.service';

import { ITracks } from 'src/app/interfaces/ITracks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  tracks: ITracks = {
    items: [],
    next: '',
    previous: '',
  };
  loading: boolean = false;

  constructor(private apiSpotify: ApiSpotifyService) {}

  async ngOnInit() {
    await this.apiSpotify.getTop('https://api.spotify.com/v1/me/top/tracks');
    this.tracks = JSON.parse(localStorage.getItem('top') || '');
    this.loading = true;
  }
}
