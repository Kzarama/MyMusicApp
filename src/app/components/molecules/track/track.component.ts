import { Component, Input } from '@angular/core';

import { track } from 'src/app/interfaces/track';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.sass'],
})
export class TrackComponent {
  @Input() track: track = {
    name: '',
    album: { images: [{ url: '' }] },
    artists: [],
  };

  constructor() {}
}
