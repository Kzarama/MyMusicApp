import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-track',
  templateUrl: './title-track.component.html',
  styleUrls: ['./title-track.component.sass'],
})
export class TitleTrackComponent {
  @Input() title: string = '';
  @Input() artists: { name: string }[] = [];

  constructor() {}
}
