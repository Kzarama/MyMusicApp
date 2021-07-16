import { Component, OnInit } from '@angular/core';
import { topTracks } from 'src/app/interfaces/topTrack';
import { getTop } from 'src/app/utils/login_spotify/login_spotify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  topTracks: topTracks = {
    items: [
      {
        name: '',
        album: { images: [{ url: '' }] },
        artists: [{ name: '' }],
      },
    ],
    next: '',
    previous: '',
  };
  currentPage: number = 1;

  constructor() {}

  ngOnInit() {
    getTop('https://api.spotify.com/v1/me/top/tracks');
    this.topTracks = JSON.parse(localStorage.getItem('top') || '');
  }

  async previousPage() {
    await getTop(this.topTracks['previous']);
    this.topTracks = JSON.parse(localStorage.getItem('top') || '');
    this.currentPage--;
  }

  async nextPage() {
    await getTop(this.topTracks['next']);
    this.topTracks = JSON.parse(localStorage.getItem('top') || '');
    this.currentPage++;
  }
}
