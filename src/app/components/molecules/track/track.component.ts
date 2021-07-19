import { Component, Input, OnInit } from '@angular/core';
import { track } from 'src/app/interfaces/track';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.sass'],
})
export class TrackComponent implements OnInit {
  @Input() track: track = {
    name: '',
    album: { images: [{ url: '' }] },
    artists: [],
  };

  constructor() {}

  ngOnInit(): void {
    console.log(this.track);
  }
}
