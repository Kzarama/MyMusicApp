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
  currentPage: number = 1;

  constructor() {}

  ngOnInit(): void {}

  async nextPage() {
    await getTop(this.tracks['next']);
    const newTopTracks = JSON.parse(localStorage.getItem('top') || '');
    const newItems = this.tracks.items.concat(newTopTracks.items);
    newTopTracks.items = newItems;
    this.tracks = newTopTracks;
    localStorage.setItem('top', JSON.stringify(this.tracks));
    this.currentPage++;
  }
}
