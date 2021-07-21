import { Component, OnInit } from '@angular/core';

import { ApiSpotifyService } from '../../services/api-spotify.service';

import { tracks } from 'src/app/interfaces/tracks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  topTracks: tracks = {
    items: [],
    next: '',
    previous: '',
  };
  loading: boolean = false;

  constructor(private apiSpotify: ApiSpotifyService) {}

  async ngOnInit() {
    await this.apiSpotify.getTop('https://api.spotify.com/v1/me/top/tracks');
    this.topTracks = JSON.parse(localStorage.getItem('top') || '');
    this.loading = true;
  }
}
