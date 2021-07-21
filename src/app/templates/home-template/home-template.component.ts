import { Component, Input, OnInit } from '@angular/core';

import { ApiSpotifyService } from '../../services/api-spotify.service';

import { tracks } from 'src/app/interfaces/tracks';

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.sass'],
})
export class HomeTemplateComponent implements OnInit {
  @Input() tracks: tracks = {
    items: [],
    next: '',
    previous: '',
  };
  @Input() loading: boolean = false;

  constructor(private apiSpotify: ApiSpotifyService) {}

  ngOnInit(): void {}

  async moreTracks() {
    await this.apiSpotify.getTop(this.tracks['next']);
    const newTracks = JSON.parse(localStorage.getItem('top') || '');
    const newItems = this.tracks.items.concat(newTracks.items);
    this.tracks = newTracks;
    this.tracks.items = newItems;
  }
}
