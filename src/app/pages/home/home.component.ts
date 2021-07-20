import { Component, OnInit } from '@angular/core';
import { tracks } from 'src/app/interfaces/tracks';
import { getTop } from 'src/app/services/spotifyApi';

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
  currentPage: number = 1;

  constructor() {}

  ngOnInit() {
    getTop('https://api.spotify.com/v1/me/top/tracks');
    this.topTracks = JSON.parse(localStorage.getItem('top') || '');
  }

  async nextPage() {
    await getTop(this.topTracks['next']);
    const newTopTracks = JSON.parse(localStorage.getItem('top') || '');
    const newItems = this.topTracks.items.concat(newTopTracks.items);
    newTopTracks.items = newItems;
    this.topTracks = newTopTracks;
    localStorage.setItem('top', JSON.stringify(this.topTracks));
    this.currentPage++;
  }
}
