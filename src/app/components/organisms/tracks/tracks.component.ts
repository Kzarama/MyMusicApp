import { Component, Input, OnInit } from '@angular/core';

import { track } from 'src/app/interfaces/track';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.sass'],
})
export class TracksComponent implements OnInit {
  @Input() tracks: track[] = [];

  constructor() {}

  ngOnInit(): void {}
}
