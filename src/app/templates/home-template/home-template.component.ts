import { Component, Input, OnInit } from '@angular/core';

import { getTop } from 'src/app/services/spotifyApi';

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

  constructor() {}

  ngOnInit(): void {}

  async moreTracks() {
    await getTop(this.tracks['next']);
    const newTracks = JSON.parse(localStorage.getItem('top') || '');
    this.tracks.items.concat(newTracks.items);
    this.tracks = newTracks;
  }
}
