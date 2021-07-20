import { Component, Input, OnInit } from '@angular/core';

import { getFavorites } from 'src/app/services/spotifyApi';

import { tracks } from 'src/app/interfaces/tracks';

@Component({
  selector: 'app-favorites-template',
  templateUrl: './favorites-template.component.html',
  styleUrls: ['./favorites-template.component.sass'],
})
export class FavoritesTemplateComponent implements OnInit {
  @Input() tracks: tracks = {
    items: [],
    next: '',
    previous: '',
  };

  constructor() {}

  ngOnInit(): void {}

  async nextPage() {
    await getFavorites(this.tracks['next']);
    const newTracks = JSON.parse(localStorage.getItem('top') || '');
    this.tracks.items.concat(newTracks.items);
    this.tracks = newTracks;
  }
}
