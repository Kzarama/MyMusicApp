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
  currentPage: number = 1;

  constructor() {}

  ngOnInit(): void {}

  async nextPage() {
    await getFavorites(this.tracks['next']);
    this.tracks = JSON.parse(localStorage.getItem('top') || '');
    this.currentPage++;
  }
}
