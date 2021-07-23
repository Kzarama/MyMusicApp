import { Component, Input } from '@angular/core';

import { track } from 'src/app/interfaces/track';
import { fade } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.sass'],
  animations: [fade],
})
export class TrackComponent {
  @Input() track: track = {
    name: '',
    album: { images: [{ url: '' }] },
    artists: [],
  };

  constructor() {}
}
