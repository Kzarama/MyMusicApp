import { Component, OnInit } from '@angular/core';

import { getFavorites } from 'src/app/services/spotifyApi';
import { tracks } from 'src/app/interfaces/tracks';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass'],
})
export class FavoritesComponent implements OnInit {
  tracks: tracks = {
    items: [],
    next: '',
    previous: '',
  };
  currentPage: number = 1;

  constructor() {}

  ngOnInit(): void {
    getFavorites('https://api.spotify.com/v1/me/tracks');
    const favoritesTracks = JSON.parse(localStorage.getItem('favorites') || '');
    var itemsTracks: any[] = [];
    for (let i = 0; i < favoritesTracks.items.length; i++) {
      itemsTracks.push(favoritesTracks.items[i].track);
    }
    this.tracks.items = itemsTracks;
    this.tracks.next = favoritesTracks.next;
    this.tracks.previous = favoritesTracks.previous;
  }
}
