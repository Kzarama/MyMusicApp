import { Component, OnInit } from '@angular/core';
import { favoriteTrack } from 'src/app/interfaces/favoriteTrack';
import { getFavorites } from 'src/app/services/spotifyApi';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass'],
})
export class FavoritesComponent implements OnInit {
  favorites: favoriteTrack = {
    items: [
      {
        track: {
          name: '',
          album: { images: [{ url: '' }] },
          artists: [{ name: '' }],
        },
      },
    ],
    next: '',
    previous: '',
  };
  currentPage: number = 1;

  constructor() {}

  ngOnInit(): void {
    getFavorites('https://api.spotify.com/v1/me/tracks');
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '');
  }

  async previousPage() {
    await getFavorites(this.favorites['previous']);
    this.favorites = JSON.parse(localStorage.getItem('top') || '');
    this.currentPage--;
  }

  async nextPage() {
    await getFavorites(this.favorites['next']);
    this.favorites = JSON.parse(localStorage.getItem('top') || '');
    this.currentPage++;
  }
}
