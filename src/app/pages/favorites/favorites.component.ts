import { Component, OnInit } from '@angular/core';

import { ApiSpotifyService } from '../../services/api-spotify.service';

import { ITracks } from 'src/app/interfaces/ITracks';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass'],
})
export class FavoritesComponent implements OnInit {
  tracks: ITracks = {
    items: [],
    next: '',
    previous: '',
  };
  loading: boolean = false;

  constructor(private apiSpotify: ApiSpotifyService) {}

  async ngOnInit() {
    await this.apiSpotify.getFavorites('https://api.spotify.com/v1/me/tracks');
    const favoritesTracks = JSON.parse(localStorage.getItem('favorites') || '');
    var itemsTracks: any[] = [];
    for (let i = 0; i < favoritesTracks.items.length; i++) {
      itemsTracks.push(favoritesTracks.items[i].track);
    }
    this.tracks.items = itemsTracks;
    this.tracks.next = favoritesTracks.next;
    this.tracks.previous = favoritesTracks.previous;
    this.loading = true;
  }
}
