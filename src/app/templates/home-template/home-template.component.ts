import { Component, Input, OnInit } from '@angular/core';
import { track } from 'src/app/interfaces/track';

@Component({
  selector: 'app-home-template',
  templateUrl: './home-template.component.html',
  styleUrls: ['./home-template.component.sass'],
})
export class HomeTemplateComponent implements OnInit {
  @Input() tracks: track[] = [];

  constructor() {}

  ngOnInit(): void {}
}
