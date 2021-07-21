import { Component, Input } from '@angular/core';

import { ApiSpotifyService } from '../../services/api-spotify.service';

import { tracks } from 'src/app/interfaces/tracks';

@Component({
  selector: 'app-favorites-template',
  templateUrl: './favorites-template.component.html',
  styleUrls: ['./favorites-template.component.sass'],
})
export class FavoritesTemplateComponent {
  @Input() tracks: tracks = {
    items: [],
    next: '',
    previous: '',
  };
  @Input() loading: boolean = false;

  constructor(private apiSpotify: ApiSpotifyService) {}

  async moreTracks() {
    await this.apiSpotify.getFavorites(this.tracks['next']);
    const newTracks = JSON.parse(localStorage.getItem('top') || '');
    const newItems = this.tracks.items.concat(newTracks.items);
    this.tracks = newTracks;
    this.tracks.items = newItems;
  }
}
