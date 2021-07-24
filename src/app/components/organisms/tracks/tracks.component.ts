import { Component, Input } from '@angular/core';

import { ApiSpotifyService } from '../../../services/api-spotify.service';

import { ITracks } from 'src/app/interfaces/ITracks';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.sass'],
})
export class TracksComponent {
  @Input() tracks: ITracks = {
    items: [],
    next: '',
    previous: '',
  };
  @Input() home: boolean = true;

  constructor(private apiSpotify: ApiSpotifyService) {}

  async moreTracks() {
    let newTracks = { items: [], next: '', previous: '' };
    if (this.home) {
      await this.apiSpotify.getTop(this.tracks['next']);
      newTracks = JSON.parse(localStorage.getItem('top') || '');
    } else {
      await this.apiSpotify.getFavorites(this.tracks['next']);
      newTracks = JSON.parse(localStorage.getItem('top') || '');
    }
    const newItems = this.tracks.items.concat(newTracks.items);
    this.tracks = newTracks;
    this.tracks.items = newItems;
  }
}
