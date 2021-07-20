import { Component, OnInit } from '@angular/core';

import { getTop } from 'src/app/services/spotifyApi';
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

  constructor() {}

  ngOnInit() {
    getTop('https://api.spotify.com/v1/me/top/tracks');
    this.topTracks = JSON.parse(localStorage.getItem('top') || '');
  }
}
