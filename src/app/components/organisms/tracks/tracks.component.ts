import { Component, Input } from '@angular/core';

import { track } from 'src/app/interfaces/track';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.sass'],
})
export class TracksComponent {
  @Input() tracks: track[] = [];

  constructor() {}
}
