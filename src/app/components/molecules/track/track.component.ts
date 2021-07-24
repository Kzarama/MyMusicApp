import { Component, Input } from '@angular/core';

import { ITrack } from 'src/app/interfaces/ITrack';
import { fade } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.sass'],
  animations: [fade],
})
export class TrackComponent {
  @Input() track: ITrack = {
    name: '',
    album: { images: [{ url: '' }] },
    artists: [],
  };

  constructor() {}
}
